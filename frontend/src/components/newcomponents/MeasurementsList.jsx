import React from "react";

const measurements = [
  { date: "10-10-2023", height: "86 cm" },
  { date: "02-02-2024", height: "104 cm" },
  { date: "10-10-2023", height: "86 cm" },
  { date: "02-02-2024", height: "104 cm" },
  // Add more measurements here as needed
];

const MeasurementsList = () => {
  return (
    <table className="measurements-table">
      <thead>
        <tr>
          <th>Date Measurement</th>
          <th>Height:</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {measurements.map((measurement, index) => (
          <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
            <td>{measurement.date}</td>
            <td>{measurement.height}</td>
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
