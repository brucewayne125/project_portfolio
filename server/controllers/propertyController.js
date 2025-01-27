const Property = require("../models/property");

// Get All Properties
const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a Property
const addProperty = async (req, res) => {
  const { title, description, price, location } = req.body;
  const imageUrl = req.file ? req.file.path : null; // Extract image path from multer

  // Ensure required fields are present
  if (!title || !description || !price || !location) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Create a new property
  const newProperty = new Property({
    title,
    description,
    price,
    location,
    imageUrl, // Save the image URL in the database
  });

  try {
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllProperties,
  addProperty,
};
