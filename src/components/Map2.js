import React, { useEffect, useState } from 'react';
import { MapContainer, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';
import { feature } from 'topojson-client';
import L from 'leaflet';
import '../leaflet.css';

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MyMap = () => {
  const [countryData, setCountryData] = useState(null);

  // Define the locations to be marked
  const locations = [
    {
      name: "USGS (Headquarters in Reston, Virginia)",
      lat: 38.9686,
      lng: -77.3424
    },
    {
      name: "Quebec (Quebec City)",
      lat: 46.8139,
      lng: -71.2082
    },
    {
      name: "Ontario (Toronto)",
      lat: 43.65107,
      lng: -79.347015
    },
    {
      name: "Australia (Canberra)",
      lat: -35.2809,
      lng: 149.1300
    },
    {
      name: "British Columbia (Victoria)",
      lat: 48.4284,
      lng: -123.3656
    }
  ];

  // Load world countries data
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const world = await response.json();
        const countries = feature(world, world.objects.countries);
        setCountryData(countries);
      } catch (error) {
        console.error('Error loading country data:', error);
      }
    };
    loadData();
  }, []);

  const getCountryColor = (countryName) => {
    return '#6B7280'; // Default gray color
  };

  const onEachCountry = (country, layer) => {
    layer.on('click', () => {
      // Paint the country when clicked
      layer.setStyle({
        fillColor: '#ff0000',
        fillOpacity: 0.7
      });
    });
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        style={{ height: '100%', width: '100%' }}
        maxBounds={[[-90, -180], [90, 180]]}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        continuousWorld={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          noWrap={true}
          bounds={[[-85, -180], [85, 180]]}
        />
        {countryData && (
          <GeoJSON 
            data={countryData} 
            onEachFeature={onEachCountry}
            style={(feature) => ({
              fillColor: getCountryColor(feature.properties.NAME),
              weight: 1,
              opacity: 1,
              color: '#333333',
              fillOpacity: 0.7
            })}
          />
        )}
        {/* Add markers for each location */}
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>
              <strong>{location.name}</strong><br />
              Lat: {location.lat}<br />
              Lng: {location.lng}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MyMap;
