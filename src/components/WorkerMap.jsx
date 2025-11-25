import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import Fuse from "fuse.js";
import PropTypes from "prop-types";

// Leaflet icon fix
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

function FlyToLocation({ position, zoom = 6 }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, zoom, { duration: 0.6 });
  }, [position, zoom, map]);
  return null;
}

export default function WorkerMap({ workers = [], initialCenter = [20, 0], initialZoom = 2 }) {
  const [query, setQuery] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [selectedPos, setSelectedPos] = useState(null);

  const skills = useMemo(() => {
    const s = new Set();
    workers.forEach((w) => (w.skills || []).forEach((sk) => s.add(sk)));
    return ["all", ...Array.from(s).sort()];
  }, [workers]);

  const fuse = useMemo(
    () =>
      new Fuse(workers, {
        keys: ["name", "city", "country", "skills"],
        threshold: 0.3,
      }),
    [workers]
  );

  const filtered = useMemo(() => {
    let result = workers;
    if (skillFilter !== "all") result = result.filter((w) => (w.skills || []).includes(skillFilter));
    if (query && query.trim().length > 0) {
      const res = fuse.search(query.trim());
      result = res.map((r) => r.item).filter((w) => result.includes(w));
    }
    return result;
  }, [workers, skillFilter, query, fuse]);

  useEffect(() => {
    if (filtered.length === 1) setSelectedPos([filtered[0].lat, filtered[0].lng]);
  }, [filtered]);

  const WorkerPopup = ({ w }) => (
    <div style={{ minWidth: 220 }}>
      <div className="d-flex align-items-center mb-2">
        <img
          src={w.avatar || "https://via.placeholder.com/56"}
          alt={w.name}
          className="rounded-3"
          style={{ width: 56, height: 56, objectFit: "cover" }}
        />
        <div className="ms-2">
          <strong>{w.name}</strong>
          <div className="text-muted" style={{ fontSize: 12 }}>
            {w.city}, {w.country}
          </div>
        </div>
      </div>
      <hr style={{ margin: "6px 0" }} />
      <div style={{ fontSize: 13 }}>
        <div><strong>Färdigheter:</strong> {(w.skills || []).join(", ") || "—"}</div>
        <div><strong>Tillgänglighet:</strong> {w.availability || "—"}</div>
        {w.description && <p style={{ marginTop: 6, marginBottom: 0 }}>{w.description}</p>}
        {w.profileUrl && (
          <a href={w.profileUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary mt-2 w-100">
            Visa profil
          </a>
        )}
      </div>
    </div>
  );

  WorkerPopup.propTypes = { w: PropTypes.object.isRequired };

  return (
    <div className="container my-4">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          {/* Filters */}
          <div className="row g-3 mb-3 align-items-center">
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text">🔍</span>
                <input
                  className="form-control rounded-3"
                  placeholder="Sök namn, stad eller färdighet..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  Rensa
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <select
                className="form-select rounded-3"
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
              >
                {skills.map((s) => (
                  <option key={s} value={s}>
                    {s === "all" ? "Alla färdigheter" : s}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3 text-end">
              <div className="small text-muted">
                Visar <strong>{filtered.length}</strong> av <strong>{workers.length}</strong> arbetare
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ height: "75vh", width: "100%", borderRadius: 12, overflow: "hidden" }}>
            <MapContainer
              center={initialCenter}
              zoom={initialZoom}
              style={{ height: "100%" }}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {selectedPos && <FlyToLocation position={selectedPos} zoom={6} />}

              <MarkerClusterGroup>
                {filtered.map((w) => (
                  <Marker key={w.id} position={[w.lat, w.lng]}>
                    <Popup>
                      <WorkerPopup w={w} />
                    </Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

WorkerMap.propTypes = {
  workers: PropTypes.array,
  initialCenter: PropTypes.array,
  initialZoom: PropTypes.number,
};
