// src/components/CompanyMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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

// List of company locations (Swedish names)
const companyLocations = [
  { country: "Grekland", lat: 37.9838, lng: 23.7275 },
  { country: "Spanien", lat: 40.4168, lng: -3.7038 },
  { country: "Sverige", lat: 59.3293, lng: 18.0686 },
  { country: "Thailand", lat: 13.7563, lng: 100.5018 },
  { country: "Brasilien", lat: -15.7939, lng: -47.8828 },
  { country: "Dubai", lat: 25.276987, lng: 55.296249 },
  { country: "Seychellerna", lat: -4.6796, lng: 55.492 },
  { country: "Colombia", lat: 4.7110, lng: -74.0721 },
];

export default function CompanyMap() {
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        backgroundColor: "#e0e0e0", // light grey background
        borderRadius: 8,
      }}
    >
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
        worldCopyJump={true} // prevents weird jumps when panning
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companyLocations.map((loc) => (
          <Marker key={loc.country} position={[loc.lat, loc.lng]}>
            <Popup>
              <div>
                <strong>{loc.country}</strong>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
