import React, { useEffect, useState } from 'react';
import DottedMap from 'dotted-map';
import PropTypes from 'prop-types';

const Map = ({
  height = 40,
  grid = 'diagonal',
  pinColor = '#d6ff79',
  pinRadius = 0.4,
  mapColor = '#D23B0C',
  mapShape = 'circle',
  backgroundColor = '#200D02',
  locations = [
    { lat: 48.8566, lng: 2.3522 }, // Paris
    { lat: 40.7128, lng: -74.0060 }, // New York
    { lat: 35.6895, lng: 139.6917 }, // Tokyo
  ]
}) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    try {
      const map = new DottedMap({
        height,
        grid,
      });

      locations.forEach(location => {
        map.addPin({
          lat: location.lat,
          lng: location.lng,
          svgOptions: { color: pinColor, radius: pinRadius }
        });
      });

      const svgMap = map.getSVG({
        radius: pinRadius,
        color: mapColor,
        shape: mapShape,
        backgroundColor,
      });

      setSvg(svgMap);
    } catch (error) {
      console.error("Error creating map:", error);
    }
  }, [height, grid, pinColor, pinRadius, mapColor, mapShape, backgroundColor, locations]);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  );
};

Map.propTypes = {
  height: PropTypes.number,
  grid: PropTypes.string,
  pinColor: PropTypes.string,
  pinRadius: PropTypes.number,
  mapColor: PropTypes.string,
  mapShape: PropTypes.string,
  backgroundColor: PropTypes.string,
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ),
};

export default Map;
