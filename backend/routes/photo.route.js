import express from "express";
import {
  getPhotos,
  createPhoto,
  updatePhoto,
  deletePhoto,
} from "../controllers/photo.controller.js";

const router = express.Router();

// GET all photos
router.get("/", getPhotos);
router.get("/uploads/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(process.cwd(), "uploads", filename); // Adjust path as needed
  res.sendFile(filePath);
});

router.post("/", createPhoto);

// PUT (update) a photo by ID
router.put("/:id", updatePhoto);

// DELETE a photo by ID
router.delete("/:id", deletePhoto);

export default router;
