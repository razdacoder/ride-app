import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import { AiFillPushpin } from "react-icons/ai";
import Map, { Marker } from "react-map-gl";

function RideMap({ destination }) {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, []);

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoicmF6Ym95IiwiYSI6ImNrYjkybTA5ZjBhM2kyc3BpYjVrOGEzMmkifQ.DUMYw49QNZ1EYzbuBnVo3Q"
      initialViewState={{
        longitude: 2.9838,
        latitude: 6.8949,
        zoom: 15.86,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <Marker
        longitude={destination.lng}
        latitude={destination.lat}
        anchor="bottom"
      ></Marker>
    </Map>
  );
}
export default RideMap;
