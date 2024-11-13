import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ address }) {
  const { lat, lon, addressLine } = address;

  const position = [lat, lon];
  const icon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Custom Marker Icon
    iconSize: [32, 32],
  });

  return (
    <div className="w-full h-96">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>{addressLine}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
