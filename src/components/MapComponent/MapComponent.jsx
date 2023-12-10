import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ waypoints }) => {
  const initialCenter = waypoints.length > 0 ? waypoints[0] : [0, 0];

  const iconURL = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer center={initialCenter} zoom={5}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {waypoints[0].lat !== 0 && waypoints[0].lng !== 0 && (
        <Marker position={waypoints[0]} icon={iconURL}>
          <Popup>Start Point</Popup>
        </Marker>
      )}
      {waypoints[1].lat !== 0 && waypoints[1].lng !== 0 && (
        <Marker position={waypoints[1]} icon={iconURL}>
          <Popup>End Point</Popup>
        </Marker>
      )}
      {waypoints[0].lat !== 0 &&
        waypoints[0].lng !== 0 &&
        waypoints[1].lat !== 0 &&
        waypoints[1].lng !== 0 && (
          <Polyline positions={[waypoints[0], waypoints[1]]} color="blue" />
        )}
    </MapContainer>
  );
};

export default MapComponent;
