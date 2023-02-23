import React, { useState, useEffect } from "react";
import { TileLayer, MapContainer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import useStyle from "./style";
import { tileLayerUrl } from "../../../Constants/url";
const Map = ({ country }) => {
  const classes = useStyle();
  const { capitalPos, countryPos, capital, name } = country;
  const icon = L.icon({
    iconUrl: "icon.gif",
    iconSize: [28, 46],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });
  const [geoJSON, setGeoJSON] = useState(null);

  useEffect(() => {
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
    fetchGeoJSON();
  }, []);

  return (
    <MapContainer
      center={countryPos}
      zoom={5}
      className={classes.mapContainer}
      scrollWheelZoom={false}
    >
      <TileLayer url={tileLayerUrl} />
      <Marker position={capitalPos} icon={icon}>
        <Popup>
          <span className={classes.popupText}>{capital}</span>
        </Popup>
      </Marker>
      {geoJSON && <GeoJSON data={geoJSON} />}
    </MapContainer>
  );
};

export default Map;
