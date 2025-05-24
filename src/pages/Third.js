import React from 'react';
import Map from '../components/Map';

// Enhanced map configuration for better dot visibility
const MAP_CONFIG = {
  height: 100,
  grid: "vertical", 
  pinColor: "#d6ff79",
  pinRadius: 0.3,  // Slightly smaller for more dots
  mapColor: "#D23B0C",
  mapShape: "circle",
  backgroundColor: "#200D02"
};

// Your location data organized by region
const LOCATIONS_BY_REGION = {
  britishColumbia: [
    { name: "British Columbia Center", lat: 53.726669, lng: -127.647621, image: "/images/bc-center.jpg" },
    { name: "BC Center (Alt 1)", lat: 54.9000, lng: -124.5000, image: "/images/bc-center.jpg" },
    { name: "BC Center (Alt 2)", lat: 55.0000, lng: -125.0000, image: "/images/bc-center.jpg" },
    { name: "BC Center (Wiki)", lat: 54.0000, lng: -125.0000, image: "/images/bc-center.jpg" },
    { name: "BC Center (Names Office)", lat: 53.9997, lng: -125.0014, image: "/images/bc-center.jpg" }
  ],
  westernAustralia: [
    { name: "Super Pit", lat: -30.774722, lng: 121.509444, image: "/images/mine.jpg" },
    { name: "Boddington Gold Mine", lat: -32.7369, lng: 116.3845, image: "/images/mine.jpg" },
    { name: "Agnew Gold Mine", lat: -27.9333, lng: 120.7000, image: "/images/mine.jpg" },
    { name: "Bellevue Gold Mine", lat: -27.9000, lng: 120.6833, image: "/images/mine.jpg" },
    { name: "Beta Hunt Mine", lat: -31.1833, lng: 121.6667, image: "/images/mine.jpg" },
    { name: "Granny Smith Gold Mine", lat: -28.8833, lng: 122.4500, image: "/images/mine.jpg" },
    { name: "Jundee Gold Mine", lat: -26.3667, lng: 120.6500, image: "/images/mine.jpg" },
    { name: "Telfer Mine", lat: -21.7167, lng: 122.2167, image: "/images/mine.jpg" },
    { name: "Tropicana Gold Mine", lat: -29.2333, lng: 124.5500, image: "/images/mine.jpg" },
    { name: "Cosmic Boy Village", lat: -32.579056, lng: 119.727196, image: "/images/mine.jpg" },
    { name: "Area C Mine", lat: -22.919956, lng: 118.974472, image: "/images/mine.jpg" },
    { name: "West Angelas Mine", lat: -23.173011, lng: 118.764703, image: "/images/mine.jpg" },
  ],
  newSouthWales: [
  { name: "Cadia-Ridgeway Mine", lat: -33.467000, lng: 148.993000, image: "/images/mine.jpg" },
  { name: "Ashton South East Opencut", lat: -32.46667, lng: 151.06667, image: "/images/mine.jpg" },
  { name: "Boggabri Coal Extension", lat: -30.596000, lng: 150.169700, image: "/images/mine.jpg" },
  { name: "Bulga Optimisation Project", lat: -32.6868, lng: 151.110000, image: "/images/mine.jpg" },
  { name: "Mount Owen Operations", lat: -32.3868, lng: 151.100000, image: "/images/mine.jpg" },
  { name: "Mt Arthur", lat: -32.3481, lng: 150.9041, image: "/images/mine.jpg" },
  ],
  queensland: [
    { name: "Belview Mine", lat: -23.6833, lng: 149.0000, image: "/images/mine.jpg" },
    { name: "Moorlands Mine", lat: -22.6550, lng: 147.4260, image: "/images/mine.jpg" },
    { name: "Moranbah South Mine", lat: -22.0565, lng: 148.0399, image: "/images/mine.jpg" }
  ],
  southAustralia: [
  { name: "Hillside Mine", lat: -34.5375, lng: 137.8722, image: "/images/mine.jpg" },
  { name: "Kalkaroo Mine", lat: -31.7290, lng: 140.5250, image: "/images/mine.jpg" },
  { name: "Olympic Dam", lat: -30.4444, lng: 136.8833, image: "/images/mine.jpg" },
  { name: "Carrapateena", lat: -31.4000, lng: 137.5000, image: "/images/mine.jpg" },
  { name: "Prominent Hill", lat: -29.7167, lng: 135.5833, image: "/images/mine.jpg" },
  ],
  northernTerritory: [
    { name: "Jervois Mine", lat: -22.6594, lng: 136.2670, image: "/images/mine.jpg" }
  ],
  quebec: [
    { name: "Quebec Central", lat: 52.000000, lng: -72.000000, image: "/images/quebec.jpg" },
    { name: "Quebec North", lat: 54.000000, lng: -72.000000, image: "/images/quebec.jpg" },
    { name: "Quebec East", lat: 52.000000, lng: -69.000000, image: "/images/quebec.jpg" },
    { name: "Quebec West", lat: 52.000000, lng: -75.000000, image: "/images/quebec.jpg" }
  ],
  ontario: [
    { name: "Ontario Central", lat: 50.000000, lng: -85.000000, image: "/images/ontario.jpg" },
    { name: "Ontario North", lat: 52.000000, lng: -85.000000, image: "/images/ontario.jpg" },
    { name: "Ontario East", lat: 50.000000, lng: -82.000000, image: "/images/ontario.jpg" },
    { name: "Ontario West", lat: 50.000000, lng: -88.000000, image: "/images/ontario.jpg" }
  ],
  utah: [
    { name: "Aberdeen Mine", lat: 39.7050011, lng: -110.7877706, image: "/images/mine.jpg" },
    { name: "Ahlstrom Mine", lat: 40.3472219, lng: -112.6033292, image: "/images/mine.jpg" },
    { name: "Bingham Canyon Mine", lat: 40.5122222, lng: -112.0186111, image: "/images/mine.jpg" },
    { name: "Bingham Canyon Mine", lat: 40.5122222, lng: -112.0186111, image: "/images/mine.jpg" },
  ]
};

const CityCard = ({ name, image }) => (
  <div className="bg-background-tertiary-dark p-1 rounded-sm shadow-card">
    <img src={image} alt={name} className="w-full h-24 object-cover rounded-sm mb-0.5" />
    <h3 className="text-tertiary-light text-xs font-bold">{name}</h3>
  </div>
);

const ThirdPage = () => {
  // Generate coverage for each region separately
  const generateRegionalCoverage = () => {
    let allCoverage = [];
    
    Object.entries(LOCATIONS_BY_REGION).forEach(([region, locations]) => {
      // Generate base dots from locations
      const baseDots = locations.map(({ lat, lng }) => ({ 
        lat, 
        lng,
        type: 'primary',
        region 
      }));
      
      // Generate intermediate dots between locations
      const intermediateDots = generateDotsForMapCoverage(baseDots, 10, region);
      
      // Add regional coverage around each location
      const regionalDots = addRegionalCoverage(baseDots, 1.5, 8, region);
      
      // Add specific coverage for special regions
      let specialCoverage = [];
      if (region === 'quebec') {
        specialCoverage = generateQuebecCoverage();
      } else if (region === 'ontario') {
        specialCoverage = generateOntarioCoverage();
      }
      
      allCoverage = [
        ...allCoverage,
        ...baseDots,
        ...intermediateDots,
        ...regionalDots,
        ...specialCoverage
      ];
    });
    
    return allCoverage;
  };

  const allMapDots = generateRegionalCoverage();

  return (
    <div className="min-h-screen bg-tertiary-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Map {...MAP_CONFIG} locations={allMapDots} />
          <div className="grid grid-cols-2 gap-4">
            {Object.values(LOCATIONS_BY_REGION).flat().map((location) => (
              <CityCard key={location.name} {...location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;

// Function to generate intermediate dots between locations for better map coverage
const generateDotsForMapCoverage = (locations, dotsPerSegment = 8, region) => {
  const allDots = [];
  
  for (let i = 0; i < locations.length - 1; i++) {
    const start = locations[i];
    const end = locations[i + 1];
    
    for (let j = 1; j <= dotsPerSegment; j++) {
      const ratio = j / (dotsPerSegment + 1);
      allDots.push({
        lat: start.lat + (end.lat - start.lat) * ratio,
        lng: start.lng + (end.lng - start.lng) * ratio,
        type: 'intermediate',
        region
      });
    }
  }
  
  return allDots;
};

// Function to add regional coverage dots around each main location
const addRegionalCoverage = (locations, radius = 2.0, pointsPerLocation = 6, region) => {
  return locations.flatMap(location => {
    const dots = [];
    for (let i = 0; i < pointsPerLocation; i++) {
      const angle = (2 * Math.PI * i) / pointsPerLocation;
      dots.push({
        lat: location.lat + radius * Math.cos(angle),
        lng: location.lng + radius * Math.sin(angle),
        type: 'regional',
        region
      });
    }
    return dots;
  });
};

// Generate Quebec coverage with proper boundaries
const generateQuebecCoverage = () => {
  const quebecBounds = {
    north: 62.60,
    south: 45.00,
    east: -57.10,
    west: -79.76
  };
  
  const dots = [];
  for (let lat = quebecBounds.south; lat <= quebecBounds.north; lat += 0.5) {
    for (let lng = quebecBounds.west; lng <= quebecBounds.east; lng += 0.5) {
      if (isInQuebec(lat, lng)) {
        dots.push({
          lat,
          lng,
          type: 'quebec',
          region: 'quebec'
        });
      }
    }
  }
  return dots;
};

// Generate Ontario coverage
const generateOntarioCoverage = () => {
  const ontarioBounds = {
    north: 56.85,
    south: 41.67,
    east: -74.34,
    west: -95.15
  };
  
  const dots = [];
  for (let lat = ontarioBounds.south; lat <= ontarioBounds.north; lat += 0.5) {
    for (let lng = ontarioBounds.west; lng <= ontarioBounds.east; lng += 0.5) {
      if (isInOntario(lat, lng)) {
        dots.push({
          lat,
          lng,
          type: 'ontario',
          region: 'ontario'
        });
      }
    }
  }
  return dots;
};

// Helper function to determine if a point is within Quebec's boundaries
const isInQuebec = (lat, lng) => {
  if (lat < 47 && lng < -75) return false;
  if (lat < 45 && lng > -71) return false;
  if (lat > 55 && lng > -65) return false;
  if (lat > 60) return false;
  return true;
};

// Helper function to determine if a point is within Ontario's boundaries
const isInOntario = (lat, lng) => {
  if (lat < 42 || lat > 56) return false;
  if (lng < -95 || lng > -75) return false;
  if (lat > 52 && lng > -82) return false; // Exclude Quebec area
  return true;
};
