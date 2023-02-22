import React from "react";
import { TileLayer, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
const Test = () => {
  console.log("test");
  return (
    <div>
      <h1>hello</h1>
      <MapContainer center={[32, -5]} zoom={5} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Test;
