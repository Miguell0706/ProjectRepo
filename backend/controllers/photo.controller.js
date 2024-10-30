import mongoose from "mongoose";
import Photo from "../models/Photo.model.js"; // Import Photo model

// Get all photos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json({ success: true, data: photos });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Create a new photo
export const createPhoto = async (req, res) => {
  console.log(req.file); // Check if the file is received
  console.log(req.body); // Check if other form fields are received

  const { height, date } = req.body;
  const image = req.file ? req.file.path : null; // File path (if saved to disk)

  if (!image || !height || !date) {
    return res.status(400).json({
      success: false,
      message: "Image, height, and date are required",
    });
  }

  const newPhoto = new Photo({ image, height, date });

  try {
    await newPhoto.save();
    res.status(201).json({ success: true, data: newPhoto });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update an existing photo by ID
export const updatePhoto = async (req, res) => {
  const { id } = req.params;
  const photo = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Photo not found" });
  }
  try {
    const updatedPhoto = await Photo.findByIdAndUpdate(id, photo, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedPhoto });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete a photo by ID
export const deletePhoto = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, message: "id is required" });
  }
  try {
    const deletedPhoto = await Photo.findByIdAndDelete(id);
    if (!deletedPhoto) {
      return res
        .status(404)
        .json({ success: false, message: "Photo not found" });
    }
    res.status(200).json({ success: true, data: deletedPhoto });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
