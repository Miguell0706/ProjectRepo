import React, { useState, useRef } from "react";
import axios from "axios";

const MeasurementsSidebar = ({ fetchPhotos }) => {
  const [date, setDate] = useState("");
  const [height, setHeight] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const handleDateChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric chars

    if (input.length >= 3 && input.length <= 4) {
      input = `${input.slice(0, 2)}-${input.slice(2)}`; // Format as DD-MM
    }
    if (input.length > 5) {
      input = `${input.slice(0, 2)}-${input.slice(2, 4)}-${input.slice(4)}`; // Format as DD-MM-YYYY
    }

    setDate(input.slice(0, 10)); // Limit to 10 characters
  };

  const validateDate = () => {
    // U.S. MM/DD/YYYY format validation|1
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

    setHeight(input);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddPhoto = async () => {
    if (!date || !height || !selectedFile) {
      alert("Please provide all the required fields");
      return;
    }
    if (!validateDate()) {
      return;
    }
    let intHeight = parseInt(height);
    if (intHeight < 50 || intHeight > 140) {
      alert("Height must be between 50 and 140 cm");
      return;
    }
    setHeight(intHeight);
    console.log(height);
    console.log(date, height, selectedFile);
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("height", height);
    formData.append("date", date);
    console.log([...formData.entries()]); // Inspect form data content

    try {
      const response = await axios.post("/api/photos", formData);
      alert("Photo added successfully!");
      console.log(response.data);
      fetchPhotos();
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Failed to upload photo");
    }
  };
  const handleButtonClick = () => {
    if (!fileInputRef.current) {
      setSelectedFile(null);
      return;
    }
    fileInputRef.current.click(); // Programmatically trigger the file input
  };

  return (
    <aside className="measurements-sidebar">
      <h2>Date of measurement</h2>
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={handleDateChange}
        maxLength={10}
      />

      <h2>Height (cm)</h2>
      <input
        type="text"
        onChange={handleHeightChange}
        placeholder="Height"
        value={height}
        required
      />

      <button className="button" onClick={handleAddPhoto}>
        Add
      </button>

      <h2>Add photo</h2>
      {selectedFile ? (
        <div>
          <p>📎 Selected file: {selectedFile.name}</p>
        </div>
      ) : (
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="custom-file-input"
        />
      )}
      <button className="button" onClick={handleButtonClick}>
        {!selectedFile ? "Choose file" : "Change file"}
      </button>
    </aside>
  );
};

export default MeasurementsSidebar;
