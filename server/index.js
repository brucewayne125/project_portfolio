const express = require("express"); 
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Enable CORS with a specific origin (React app running on localhost:3000)
app.use(cors({
  origin: "http://localhost:3000", // Change this to your React app's URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
}));

// Import Routes
const userRoutes = require("./routes/userRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/vehicles", vehicleRoutes);

// Connect to MongoDB using the URI from your environment variables
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the EasyGebeya Backend!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
