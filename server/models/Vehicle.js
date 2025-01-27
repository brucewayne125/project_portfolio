const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String }, // Field to store the uploaded image path
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
