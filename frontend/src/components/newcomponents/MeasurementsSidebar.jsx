import React, { useState, useRef } from "react";

const MeasurementsSidebar = () => {
  const [date, setDate] = useState("");
  const [height, setHeight] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const handleDateChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric chars

    // Auto-insert slashes into the date format MM/DD/YYYY
    if (input.length >= 3 && input.length <= 4)
      input = `${input.slice(0, 2)}/${input.slice(2)}`;
    if (input.length >= 5)
      input = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4)}`;

    setDate(input.slice(0, 10)); // Limit to 10 characters
  };

  const validateDate = () => {
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!datePattern.test(date)) {
      alert("Please enter a valid datecccccccccx in MM/DD/YYYY format");
    }
    ccccccccccc;
  };
  const handleHeightChange = (e) => {
    const input = e.target.value;

    // Only allow numbers within the range of 30-140
    if (input === "" || (input >= 30 && input <= 140)) {
      setHeight(input);
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Programmatically trigger the file input
  };

  return (
    <aside className="measurements-sidebar">
      <h2>Date of measurement</h2>
      <input
        type="text"
        placeholder="MM/DD/YYYY"
        value={date}
        onChange={handleDateChange}
        onBlur={validateDate}
        maxLength={10}
      />

      <h2>Height (cm)</h2>
      <input
        type="number"
        onChange={handleHeightChange}
        placeholder="Height"
        min="30"
        max="140"
        step="10"
        value={height}
        required
      />

      <button className="button">Add</button>

      <h2>Add photo</h2>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        class="custom-file-input"
      />
      <button className="button" onClick={handleButtonClick}>
        Add attachment
      </button>

      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </aside>
  );
};

export default MeasurementsSidebar;
