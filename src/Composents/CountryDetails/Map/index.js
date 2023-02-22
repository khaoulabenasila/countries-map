import React, { useState, useEffect } from "react";
import { TileLayer, MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import useStyle from "../style";
const Map = ({ country }) => {
  const { capitalPos, countryPos, capital, name } = country;
  const classes = useStyle();

  const icon = L.icon({
    iconUrl: "icon.gif",
    iconSize: [28, 46],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });
  const [geoJSON, setGeoJSON] = useState(null);

  const fetchGeoJSON = () => {
    const geoData = require("../../../Constants/geoData.json");
    let geoObjt = {
      type: "FeatureCollection",
      features: [],
    };
    const findGeo = geoData.features.find(
      (item) => item.properties["ADMIN"] === name
    );
    if (findGeo) {
      geoObjt.features.push(findGeo);
      setGeoJSON(geoObjt);
    }
  };

  useEffect(() => {
    fetchGeoJSON();
  }, []);

  return (
    <MapContainer
      center={countryPos}
      zoom={5}
      style={{ height: "70vh" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=FVpWvWqxk80KShUAim4H" />
      <Marker position={capitalPos} icon={icon}>
        <Popup>{capital}</Popup>
      </Marker>
      {geoJSON && <GeoJSON data={geoJSON} className={classes.countryOutline} />}
    </MapContainer>
  );
};

export default Map;
