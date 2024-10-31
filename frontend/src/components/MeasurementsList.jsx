import React, { useEffect, useState } from "react";

// Helper function to format dates as 'dd-mm-yyyy'
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const MeasurementsList = ({ measurements, onUpdateMeasurement }) => {
  const [formattedMeasurements, setFormattedMeasurements] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track which row is being edited
  const [editValues, setEditValues] = useState({ height: "", date: "" });

  // Format dates when measurements prop changes
  useEffect(() => {
    const formatted = measurements.map((item) => ({
      ...item,
      date: formatDate(item.date),
    }));
    setFormattedMeasurements(formatted);
  }, [measurements]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValues({
      height: formattedMeasurements[index].height,
      date: formattedMeasurements[index].date,
    });
  };

  const handleDateChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric chars

    if (input.length >= 3 && input.length <= 4) {
      input = `${input.slice(0, 2)}-${input.slice(2)}`; // Format as DD-MM
    }
    if (input.length > 5) {
      input = `${input.slice(0, 2)}-${input.slice(2, 4)}-${input.slice(4)}`; // Format as DD-MM-YYYY
    }

    setEditValues((prev) => ({ ...prev, date: input.slice(0, 10) })); // Limit to 10 characters
  };

  const handleHeightChange = (e) => {
    const input = e.target.value;

    // Only allow numbers within the range of 30-140
    if (input === "" || (input >= 30 && input <= 140)) {
      setEditValues((prev) => ({ ...prev, height: input }));
    }
  };

  const handleSave = (index) => {
    console.log(index);
    const updatedMeasurement = {
      ...formattedMeasurements[index],
      ...editValues,
    };
    onUpdateMeasurement(updatedMeasurement);

    // Replace the specific measurement in the array with the updated one
    const updatedMeasurementsArray = formattedMeasurements.map(
      (measurement, i) => (i === index ? updatedMeasurement : measurement)
    );

    // Assuming there's a function to update formattedMeasurements state in the parent component
    setFormattedMeasurements(updatedMeasurementsArray);

    setEditIndex(null); // Exit edit mode
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

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
        {formattedMeasurements.map((measurement, index) => (
          <tr
            key={measurement.id || index}
            className={index % 2 === 0 ? "even-row" : "odd-row"}
          >
            <td>
              {editIndex === index ? (
                <input
                  className="edit-input"
                  type="text"
                  name="date"
                  value={editValues.date}
                  onChange={handleDateChange}
                />
              ) : (
                measurement.date || "N/A"
              )}
            </td>
            <td>
              {editIndex === index ? (
                <input
                  className="edit-input"
                  type="number"
                  min="30"
                  max="140"
                  step="10"
                  name="height"
                  value={editValues.height}
                  onChange={handleHeightChange}
                />
              ) : (
                `${measurement.height || "N/A"} cm`
              )}
            </td>
            <td>
              {editIndex === index ? (
                <>
                  <button
                    className="edit-button"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                  <button className="edit-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="edit-button"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeasurementsList;
