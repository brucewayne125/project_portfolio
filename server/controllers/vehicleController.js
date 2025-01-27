const Vehicle = require("../models/Vehicle");

// Get All Vehicles
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a Vehicle
const addVehicle = async (req, res) => {
  const { title, description, price, type } = req.body;
  const imageUrl = req.file ? req.file.path : null; // Extract image path from multer

  // Ensure required fields are present
  if (!title || !description || !price || !type) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Create a new vehicle
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
};

module.exports = {
  getAllVehicles,
  addVehicle,
};
