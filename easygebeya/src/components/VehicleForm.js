import React, { useState } from "react";
import axios from "axios";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    type: "",
  });
  const [image, setImage] = useState(null); // State for the image
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send the file
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("type", formData.type);
    if (image) {
      data.append("image", image);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/vehicles", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Vehicle added successfully!");
      setErrorMessage("");
      setFormData({ title: "", description: "", price: "", type: "" });
      setImage(null);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Error adding vehicle.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Vehicle</h1>
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block font-medium mb-2">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full"
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VehicleForm;
