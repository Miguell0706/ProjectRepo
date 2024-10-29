import React from "react";
import MeasurementsSidebar from "../components/newcomponents/MeasurementsSidebar";
import giraffe from "../assets/Giraffe.jpg"; // Adjust path if needed
import "../styles/growthpage.css";
const GrowthPage = () => {
  return (
    <div class="page-container">
      <div class="giraffe-measurements-container">
        <div class="giraffe-container">
          <img src={giraffe} class="giraffe" alt="Giraffe" />
        </div>
      </div>

      <MeasurementsSidebar />
    </div>
  );
};

export default GrowthPage;
