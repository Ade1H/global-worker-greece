import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Pre-defined SVG strings for different colors
const createCustomIcon = (color) => {
  let svgString;
  
  // Create SVG string manually for each color
  switch(color) {
    case '#FF6B6B': // Red
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#FF6B6B" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#4ECDC4': // Teal
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#4ECDC4" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#45B7D1': // Blue
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#45B7D1" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#FFA07A': // Orange
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#FFA07A" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#98D8C8': // Mint
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#98D8C8" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#F7DC6F': // Yellow
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#F7DC6F" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#BB8FCE': // Purple
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#BB8FCE" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    case '#85C1E9': // Light Blue
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#85C1E9" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
      break;
    default: // Default blue
      svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"><path fill="#0077b6" stroke="#fff" stroke-width="2" d="M12.5 1C6.7 1 2 5.7 2 11.5c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C23 5.7 18.3 1 12.5 1z"/><circle cx="12.5" cy="11.5" r="4" fill="#fff"/></svg>';
  }
  
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(svgString),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
};

// Sample workers data with colors matching all 8 countries
const sampleWorkers = [
  { id: 'w1', name: 'Ava Johansson', lat: 57.7089, lng: 11.9746, country: 'Sverige', city: 'Göteborg', skills: ['Städning', 'Flytt'], availability: 'Heltid', color: "#FF6B6B" },
  { id: 'w2', name: 'Yannis Papadopoulos', lat: 37.9838, lng: 23.7275, country: 'Grekland', city: 'Aten', skills: ['El', 'Hantverkare'], availability: 'Deltid', color: "#4ECDC4" },
  { id: 'w3', name: 'Maria Rodriguez', lat: 40.4168, lng: -3.7038, country: 'Spanien', city: 'Madrid', skills: ['Servitris', 'Kock'], availability: 'Heltid', color: "#45B7D1" },
  { id: 'w4', name: 'Carlos Silva', lat: -23.5505, lng: -46.6333, country: 'Brasilien', city: 'São Paulo', skills: ['Bygg', 'Målare'], availability: 'Deltid', color: "#FFA07A" },
  { id: 'w5', name: 'Lars Andersson', lat: 59.3293, lng: 18.0686, country: 'Sverige', city: 'Stockholm', skills: ['IT', 'Programmering'], availability: 'Heltid', color: "#98D8C8" },
  { id: 'w6', name: 'Emma Chen', lat: 13.7563, lng: 100.5018, country: 'Thailand', city: 'Bangkok', skills: ['Massage', 'Spa'], availability: 'Deltid', color: "#F7DC6F" },
  { id: 'w7', name: 'Ahmed Hassan', lat: 25.2048, lng: 55.2708, country: 'Dubai', city: 'Dubai', skills: ['IT-support', 'Administration'], availability: 'Heltid', color: "#BB8FCE" },
  { id: 'w8', name: 'Isabella Martinez', lat: 4.7110, lng: -74.0721, country: 'Colombia', city: 'Bogotá', skills: ['Spanska', 'Kundservice'], availability: 'Heltid', color: "#85C1E9" },
];

function WorkerMap({ workers = sampleWorkers }) {
  return (
    <div style={{ 
      height: '500px', 
      width: '100%', 
      borderRadius: '10px', 
      overflow: 'hidden', 
      border: '2px solid #dee2e6',
      position: 'relative'  // ← ADD THIS
    }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        minZoom={2}
        maxBounds={[[-90, -180], [90, 180]]}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {workers.map((worker) => (
          <Marker 
            key={worker.id} 
            position={[worker.lat, worker.lng]}
            icon={createCustomIcon(worker.color)}
          >
            <Popup>
              <div style={{ minWidth: '200px' }}>
                <div style={{ 
                  backgroundColor: worker.color, 
                  color: 'white', 
                  padding: '8px', 
                  margin: '-16px -16px 8px -16px',
                  borderRadius: '4px 4px 0 0',
                  fontWeight: 'bold'
                }}>
                  {worker.name}
                </div>
                <div style={{ padding: '8px 0' }}>
                  <div>📍 {worker.city}, {worker.country}</div>
                  <div>🔧 {worker.skills?.join(', ')}</div>
                  <div>⏰ {worker.availability}</div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* FIXED OVERLAY - Add pointerEvents: 'none' */}
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        right: '10px', 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        padding: '10px', 
        borderRadius: '5px',
        border: '1px solid #ccc',
        zIndex: 1000,
        fontSize: '14px',
        fontWeight: 'bold',
        pointerEvents: 'none',  // ← CRITICAL FIX
        userSelect: 'none'      // ← Optional but recommended
      }}>
        👥 {workers.length} arbetare
      </div>
    </div>
  );
}

export default WorkerMap;