const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "Username is required."] },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Email format is invalid."],
  },
  password: { type: String, required: [true, "Password is required."] },
});

module.exports = mongoose.model("User", userSchema);
