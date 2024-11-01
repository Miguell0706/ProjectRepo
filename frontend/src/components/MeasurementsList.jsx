import React, { useEffect, useState } from "react";

// Helper function to format dates as 'dd-mm-yyyy'
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = String(date.getDate()).padStart(2, "0");
  const day = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
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

  const validateDate = (date) => {
    // U.S. MM/DD/YYYY format validation
    const datePattern = /^(0[1-9]|1[0-2])[-\/](0[1-9]|[12]\d|3[01])[-\/]\d{4}$/;

    if (!datePattern.test(date)) {
      console.log("Invalid date format");
      alert("Please enter a valid date in MM/DD/YYYY format");
      return false;
    }

    return true;
  };

  const handleHeightChange = (e) => {
    const input = e.target.value;
    // Allow empty string or an integer
    if (!/^$|^\d+$/.test(input)) {
      return;
    }
    setEditValues((prev) => ({ ...prev, height: input }));
  };
  const handleSave = (index) => {
    const updatedHeight = parseInt(editValues.height, 10);

    // Check if height is a valid number and within the range
    if (isNaN(updatedHeight) || updatedHeight < 30 || updatedHeight > 140) {
      alert("Please enter a height between 30 and 140 cm.");
      return;
    }

    // Validate date
    if (!validateDate(editValues.date)) {
      return;
    }

    const updatedMeasurement = {
      ...formattedMeasurements[index],
      height: updatedHeight,
      date: editValues.date,
    };

    onUpdateMeasurement(updatedMeasurement);

    // Replace the specific measurement in the array with the updated one
    const updatedMeasurementsArray = formattedMeasurements.map(
      (measurement, i) => (i === index ? updatedMeasurement : measurement)
    );

    setFormattedMeasurements(updatedMeasurementsArray);
    setEditIndex(null); // Exit edit mode
  };
  const deletePhoto = async (id, index) => {
    try {
      const response = await fetch(`api/photos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete photo");
      }
      alert("Photo deleted successfully");
      // Remove the deleted photo from the measurements array
      const updatedMeasurementsArray = formattedMeasurements.filter(
        (_, i) => i !== index
      );
      setFormattedMeasurements(updatedMeasurementsArray);
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
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
                  type="text"
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
                <>
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deletePhoto(measurement._id, index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeasurementsList;
