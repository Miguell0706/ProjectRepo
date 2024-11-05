import React, { useState, useEffect, useRef } from "react";
import giraffe from "../assets/Giraffe.jpg"; // Adjust path if needed

const GiraffeContainer = ({ measurements }) => {
  const [hoveredMeasurement, setHoveredMeasurement] = useState(null);
  const [displayedImages, setDisplayedImages] = useState([]);

  const imageCache = useRef({
    14: [],
    13: [],
    12: [],
    11: [],
    10: [],
    9: [],
    8: [],
    7: [],
    6: [],
    5: [],
  });

  useEffect(() => {
    measurements.forEach((measurement) => {
      const height = parseInt(measurement.height);
      const key =
        height >= 100 ? Math.floor(height / 10) : Math.floor(height / 10);

      if (imageCache.current[key] !== undefined) {
        imageCache.current[key].push(measurement.image);
      }
    });
    console.log("Image Cache:", imageCache.current);
  });

  const handleMouseEnter = (measurement) => {
    setHoveredMeasurement(measurement);
    setDisplayedImages(imageCache.current[measurement] || []);
  };

  return (
    <div className="giraffe-container">
      <div className="image-wrapper">
        <img src={giraffe} className="giraffe" alt="Giraffe" />

        {/* Hover zones positioned relative to the image */}
        {[14, 13, 12, 11, 10, 9, 8, 7, 6, 5].map((measurement, index) => (
          <div
            key={measurement}
            className="hover-zone"
            style={{
              top: `${index * 5.7}%`, // Adjust for even spacing
            }}
            onMouseEnter={() => handleMouseEnter(measurement)}
          >
            {hoveredMeasurement && (
              <div className="image-display">
                {displayedImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Height marker ${measurement}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiraffeContainer;
