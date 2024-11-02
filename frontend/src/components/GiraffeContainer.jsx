import React, { useState } from "react";
import giraffe from "../assets/Giraffe.jpg"; // Adjust path if needed

const GiraffeContainer = ({ measurements }) => {
  const [hoveredMeasurement, setHoveredMeasurement] = useState(null);

  const handleMouseEnter = (measurement) => {
    setHoveredMeasurement(measurement);
  };

  const handleMouseLeave = () => {
    setHoveredMeasurement(null);
  };

  return (
    <div className="giraffe-container">
      <img src={giraffe} className="giraffe" alt="Giraffe" />

      {/* Measurement markers */}
      {[30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140].map(
        (measurement) => (
          <div
            key={measurement}
            className="hover-zone"
            style={{ top: `${measurement}%` }} // Adjust for precise positioning
            onMouseEnter={() => handleMouseEnter(measurement)}
            onMouseLeave={handleMouseLeave}
          />
        )
      )}

      {/* Display the images next to the hovered marker */}
      {hoveredMeasurement && (
        <div className="image-display">
          {/* Replace with images specific to each measurement */}
          <img
            src={`/path/to/images/${hoveredMeasurement}.jpg`}
            alt={`Measurement ${hoveredMeasurement}`}
          />
        </div>
      )}
    </div>
  );
};

export default GiraffeContainer;
