import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/user.controller.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Import the middleware

const router = express.Router();

// User routes
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Authentication routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Protected route: Get current user
router.get("/me", authMiddleware, getCurrentUser);

export default router;
