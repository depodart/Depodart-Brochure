import React, { useEffect, useState } from 'react';
import DottedMap from 'dotted-map'; // Changed from { DottedMap }

const Map = () => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    try {
      const map = new DottedMap({
        height: 40,
        grid: 'diagonal',
      });

      map.addPin({ 
        lat: 48.8566, 
        lng: 2.3522, // Changed from lon to lng
        svgOptions: { color: '#d6ff79', radius: 0.4 } 
      }); // Paris
      
      map.addPin({ 
        lat: 40.7128, 
        lng: -74.0060, // Changed from lon to lng
        svgOptions: { color: '#d6ff79', radius: 0.4 } 
      }); // New York
      
      map.addPin({ 
        lat: 35.6895, 
        lng: 139.6917, // Changed from lon to lng
        svgOptions: { color: '#d6ff79', radius: 0.4 } 
      }); // Tokyo

      const svgMap = map.getSVG({
        radius: 0.4,
        color: '#D23B0C',
        shape: 'circle',
        backgroundColor: '#200D02',
      });

      setSvg(svgMap);
    } catch (error) {
      console.error("Error creating map:", error);
    }
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

export default Map;
