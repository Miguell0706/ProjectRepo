import React, { useEffect, useState } from "react";

const MeasurementsList = () => {
  const [measurements, setMeasurements] = useState([]); // State for photos

  // Fetch photos with useEffect
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos"); // Adjust the endpoint if needed
        const data = await response.json();
        if (data.success) {
          console.log(data.data); // Log photos in the console
          setMeasurements(data.data); // Store the data in state
        } else {
          console.error("Failed to fetch photos:", data.message);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <table className="measurements-table">
      <thead>
        <tr>
          <th>Date Measurement</th>
          <th>Height</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {measurements.map((measurement, index) => (
          <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
            <td>{measurement.date || "N/A"}</td>
            <td>{measurement.height || "N/A"}</td>
            <td>
              <button className="edit-button">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeasurementsList;
