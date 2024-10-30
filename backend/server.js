import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import photoRoutes from "./routes/photo.route.js";
import path from "path";
import cors from "cors";
import multer from "multer";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: "uploads/", // Files will be stored in the 'uploads/' folder
  filename: (req, file, cb) => {
    // Create a unique filename to avoid conflicts
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }); // Configure multer with storage settings

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/photos", upload.single("image"), photoRoutes);

// Serve frontend files in development or production
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
);

// Start the server and connect to MongoDB
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process if DB fails to connect
  }
});
