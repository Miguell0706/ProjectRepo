import React, { useState, useEffect } from "react";
import giraffe from "../assets/Giraffe.jpg"; // Adjust path if needed

const GiraffeContainer = ({ measurements }) => {
  const [displayedImages, setDisplayedImages] = useState([]);

  let imageCache = {
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
  };
  useEffect(() => {
    measurements.forEach((measurement) => {
      const height = parseInt(measurement.height);
      const key =
        height >= 100 ? Math.floor(height / 10) : Math.floor(height / 10);
      if (imageCache[key] !== undefined) {
        imageCache[key].push(measurement.image);
      }
    });
  });
  const handleMouseEnter = (measurement) => {
    setDisplayedImages(imageCache[measurement]);
    console.log(imageCache[measurement]);
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
          />
        ))}
        <div className="image-display">
          {displayedImages.map((image, idx) => (
            <img
              key={idx}
              src={`${import.meta.env.VITE_API_URL}/${image.replace(
                /\\/g,
                "/"
              )}`}
              alt={`Image ${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiraffeContainer;
