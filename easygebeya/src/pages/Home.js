import React, { useState, useEffect } from "react";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties");
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <div>
        {properties.map((property) => (
          <div key={property._id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            {/* Render the image */}
            {property.image && (
              <img
                src={property.image}
                alt={property.title}
                style={{ width: "200px", height: "auto" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
