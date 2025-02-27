import React, { useState } from "react";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    type: "",
    image: null, // For file upload
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    const data = new FormData(); // Create FormData object for file upload
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/vehicles", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add vehicle.");
      }

      const result = await response.json();
      console.log("Success:", result);
      setMessage("Vehicle added successfully!");
      setFormData({ title: "", description: "", price: "", type: "", image: null }); // Reset form
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.message || "Failed to submit the form.");
    }
  };

  return (
    <div>
      <h2>Add a New Vehicle</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Type:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" name="image" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VehicleForm;
