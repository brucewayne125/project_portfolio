const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// Get All Properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a Property
router.post("/", async (req, res) => {
  const { title, description, price, location } = req.body;

  const newProperty = new Property({
    title,
    description,
    price,
    location,
  });

  try {
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;