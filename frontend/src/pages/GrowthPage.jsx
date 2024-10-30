import React from "react";
import MeasurementsSidebar from "../components/MeasurementsSidebar";
import MeasurementsList from "../components/MeasurementsList";
import giraffe from "../assets/Giraffe.jpg"; // Adjust path if needed
import "../styles/growthpage.css";
const GrowthPage = () => {
  return (
    <div className="page-container">
      <div className="giraffe-measurements-container">
        <div className="giraffe-container">
          <img src={giraffe} className="giraffe" alt="Giraffe" />
        </div>
      </div>

      <MeasurementsSidebar />
      <MeasurementsList />
    </div>
  );
};

export default GrowthPage;
