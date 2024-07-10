import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const apiKey = "AIzaSyDswIgnsvQxrHziqtTCKl-5HHoYlNFrcLE";
  const mapContainerStyle = {
    height: "600px",
    width: "100%",
  };

  const locations = [
    { lat: 13.0827, lng: 80.2707, name: "Chennai" }, // Chennai
    { lat: 19.076, lng: 72.8777, name: "Mumbai" }, // Mumbai
    { lat: 12.9716, lng: 77.5946, name: "Bangalore" }, // Bangalore
    { lat: 15.2993, lng: 74.124, name: "Goa" }, // Goa
    { lat: 18.5204, lng: 73.8567, name: "Pune" }, // Pune
    { lat: 28.7041, lng: 77.1025, name: "Delhi" }, // Delhi
    { lat: 17.385, lng: 78.4867, name: "Hyderabad" }, // Hyderabad
  ];

  const center = {
    lat: 20.5937, // Center latitude for India
    lng: 78.9629, // Center longitude for India
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={5}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
