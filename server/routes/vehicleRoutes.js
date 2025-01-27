const express = require("express");
const multer = require("multer");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Configure multer to store images in the 'uploads' folder
const upload = multer({
  dest: "uploads/", // Destination folder for uploaded files
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
  },
});

// Get All Vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a Vehicle with Image Upload
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, price, type } = req.body;
  const imageUrl = req.file ? req.file.path : null; // Save the uploaded image's path

  const newVehicle = new Vehicle({
    title,
    description,
    price,
    type,
    imageUrl, // Save the image URL in the database
  });

  try {
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
