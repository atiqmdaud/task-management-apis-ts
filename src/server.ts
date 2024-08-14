// app.ts
import express, { Application } from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app: Application = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Waiting DB connection...");
});
