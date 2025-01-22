const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true }, // e.g., Car, Bike, Truck
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vehicle", vehicleSchema);