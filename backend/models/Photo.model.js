import mongoose from "mongoose";

// Define the Photo Schema
const photoSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    date: {
      type: Date, // Use Date type instead of String
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

// Create the Photo Model
const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
