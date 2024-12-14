import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

// User routes
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Registration route
router.post("/register", registerUser);

export default router;
