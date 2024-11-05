import React, { useState, useEffect } from "react";
import MeasurementsSidebar from "../components/MeasurementsSidebar";
import MeasurementsList from "../components/MeasurementsList";
import GiraffeContainer from "../components/GiraffeContainer";
import "../styles/growthpage.css";
const GrowthPage = () => {
  const [measurements, setMeasurements] = useState([]);
  const fetchPhotos = async () => {
    try {
      const response = await fetch("/api/photos");
      const data = await response.json();
      if (data.success) {
        setMeasurements(data.data);
      } else {
        console.error("Failed to fetch photos:", data.message);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  //==========THIS CODE UPDATES THE PHOTO OBJECT IN THE BACKEND WHEN IT GETS CHANGED IN MEASUREMENTS LIST ===================//
  const onUpdateMeasurement = async (updatedMeasurement) => {
    console.log("Updating measurement:", updatedMeasurement);
    try {
      const response = await fetch(`/api/photos/${updatedMeasurement._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMeasurement),
      });

      if (!response.ok) {
        throw new Error("Failed to update measurement");
      }

      const data = await response.json();
      console.log("Updated measurement:", data);
    } catch (error) {
      console.error("Error updating measurement:", error);
    }
  };
  // Fetch photos when the component mounts
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <div className="page-container">
      <div className="giraffe-measurements-container">
        <GiraffeContainer measurements={measurements} />
      </div>

      <MeasurementsSidebar fetchPhotos={fetchPhotos} />
      <MeasurementsList
        measurements={measurements}
        onUpdateMeasurement={onUpdateMeasurement}
      />
    </div>
  );
};

export default GrowthPage;
