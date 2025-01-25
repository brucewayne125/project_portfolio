router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route' });
});
const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");

// Get All Vehicles
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a Vehicle
router.post("/", async (req, res) => {
  const { title, description, price, type } = req.body;

  const newVehicle = new Vehicle({
    title,
    description,
    price,
    type,
  });

  try {
    const savedVehicle = await newVehicle.save();
    res.status(201).json(savedVehicle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;