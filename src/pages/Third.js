import React from 'react';
import Map from '../components/Map';

// Constants for map configuration
const MAP_CONFIG = {
  height: 100,
  grid: "vertical",
  pinColor: "#d6ff79",
  pinRadius: 0.4,
  mapColor: "#D23B0C",
  mapShape: "circle",
  backgroundColor: "#200D02"
};

// City data organized by region
const CITY_DATA = {
  canadian: [
    { name: "Alberta", lat: 55.000000, lng: -115.000000, image: "/images/alberta.jpg" },
    { name: "Vancouver", lat: 49.600000, lng: -123.600000, image: "/images/vancouver.jpg" },
    { lat: 49.895077, lng: -97.138451 }, // Winnipeg
    { lat: 46.699999, lng: -66.099998 }, // New Brunswick
    { lat: 44.651070, lng: -63.582687 }, // Halifax
  ],
  australian: [
    { name: "Sydney", lat: -33.870, lng: 151.210, image: "/images/sydney.jpg" },
    { name: "Melbourne", lat: -37.810, lng: 144.960, image: "/images/melbourne.jpg" },
    { lat: -27.460, lng: 153.020 }, // Brisbane
    { lat: -31.960, lng: 115.840 }, // Perth
    { lat: -34.930, lng: 138.600 }, // Adelaide
    { lat: -35.310, lng: 149.130 }, // Canberra
    { lat: -42.850, lng: 147.290 }, // Hobart
    { lat: -12.430, lng: 130.850 }, // Darwin
  ],
  usa: [
    { name: "New York", lat: 40.670, lng: -73.940, image: "/images/newyork.jpg" },
    { name: "Los Angeles", lat: 34.110, lng: -118.410, image: "/images/losangeles.jpg" },
    { lat: 41.840, lng: -87.680 }, // Chicago
    { lat: 29.741, lng: -95.464 }, // Houston
    { lat: 33.540, lng: -112.070 }, // Phoenix
    { lat: 40.010, lng: -75.130 }, // Philadelphia
    { lat: 29.460, lng: -98.510 }, // San Antonio
    { lat: 32.810, lng: -117.140 }, // San Diego
    { lat: 32.790, lng: -96.770 }, // Dallas
    { lat: 38.910, lng: -77.020 }, // Washington DC
  ]
};

// Component for city card
const CityCard = ({ name, image }) => (
  <div className="bg-background-tertiary-dark p-1 rounded-sm shadow-card">
    <img src={image} alt={name} className="w-full h-24 object-cover rounded-sm mb-0.5" />
    <h3 className="text-tertiary-light text-xs font-bold">{name}</h3>
  </div>
);

const ThirdPage = () => {
  // Combine all locations for the map
  const allLocations = [
    ...CITY_DATA.canadian,
    ...CITY_DATA.australian,
    ...CITY_DATA.usa
  ].map(({ lat, lng }) => ({ lat, lng }));

  return (
    <div className="min-h-screen bg-tertiary-dark">
      <div className="container mx-auto px-4 py-8">
        {/* Canadian Cities Section */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {CITY_DATA.canadian.slice(0, 2).map((city) => (
            <CityCard key={city.name} {...city} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}

            <Map {...MAP_CONFIG} locations={allLocations} />


          {/* Images Grid Section */}
          <div className="grid grid-cols-2 gap-4">
            {CITY_DATA.australian.slice(0, 2).map((city) => (
              <CityCard key={city.name} {...city} />
            ))}
            {CITY_DATA.usa.slice(0, 2).map((city) => (
              <CityCard key={city.name} {...city} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
