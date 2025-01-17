import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3 } from "@aws-sdk/client-s3";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import photoRoutes from "./routes/photo.route.js";
import path from "path";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
// Configure multer with S3 storage
const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit to 10 MB
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,

    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}-${file.originalname}`); // path within S3 bucket
    },
  }),
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/photos", upload.single("image"), photoRoutes);

// Serve frontend files in development or production
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend/dist", "index.html"))
);

// Start the server and connect to MongoDB
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
});
