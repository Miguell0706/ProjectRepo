import React, { useState, useEffect } from "react";
import giraffe from "../../assets/GrowthPageAssets/Giraffe.jpg";

const GiraffeContainer = ({ measurements }) => {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [displayPosition, setDisplayPosition] = useState(0); // State to store top position

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
  const handleMouseEnter = (measurement, index) => {
    setDisplayedImages(imageCache[measurement]);
    setDisplayPosition(index * 7); // Set display position to match hover zone position

    setTimeout(() => {
      const images = document.querySelectorAll(".image-display img");
      images.forEach((img) => {
        img.style.transition = "300ms ease-in-out";
        img.style.transform = "scale(1)";
      });
    }, 10); // Slight delay to ensure images are rendered
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
            onMouseEnter={() => handleMouseEnter(measurement, index)}
          />
        ))}
        <div
          className="image-display"
          style={{
            top: `calc(${displayPosition + 4}% + 10px)`, // Adjust for even spacing
          }}
        >
          {displayedImages.map((image, idx) => (
            <img
              key={idx}
              className="pop-out"
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
