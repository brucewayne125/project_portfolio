import React, { useState } from 'react';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    type: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    const response = await fetch('/api/properties', {
      method: 'POST',
      body: data,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} />
      <input type="text" name="type" placeholder="Type" onChange={handleChange} />
      <input type="file" name="image" onChange={handleChange} />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;
