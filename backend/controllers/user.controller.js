import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/User.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const user = req.body; // user will send this data
  if (!user.name || !user.image) {
    return res
      .status(400)
      .json({ success: false, message: "name and image are required" });
  }
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "user not found" });
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, message: "id is required" });
  }
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({ success: true, data: deletedUser });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "../models/User.model.js";

// Registration Controller
export const registerUser = async (req, res) => {
  const { name, image, username, password } = req.body;

  // Validate required fields
  if (!name || !username || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, username, and password are required",
    });
  }

  try {
    // Check if the username already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with optional image
    const newUser = new User({
      name,
      image: image || "https://example.com/default-avatar.png", // Default image if not provided
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { id: newUser._id, name: newUser.name, username: newUser.username },
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
