import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./controllers/authController.js";
// import videoRoutes from "./controllers/videoController.js";
import { connectToDatabase } from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/api/auth", authRoutes);
// app.use("/api/video", videoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
