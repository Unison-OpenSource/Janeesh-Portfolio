import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const apiKey = 'AIzaSyDswIgnsvQxrHziqtTCKl-5HHoYlNFrcLE';
  const mapContainerStyle = {
    height: '400px',
    width: '100%'
  };
  const center = {
    lat: 0, // Center latitude
    lng: 0  // Center longitude
  };

  const locations = [
    { lat: 37.7749, lng: -122.4194 }, // Example location 1 (San Francisco)
    { lat: 34.0522, lng: -118.2437 }, // Example location 2 (Los Angeles)
    { lat: 40.7128, lng: -74.0060 }   // Example location 3 (New York)
  ];

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={4}
      >
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
