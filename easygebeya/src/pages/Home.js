import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties and vehicles from the backend when the component mounts
  useEffect(() => {
    // Fetch properties
    axios
      .get("http://localhost:5000/api/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });

    // Fetch vehicles
    axios
      .get("http://localhost:5000/api/vehicles")
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false when all data is fetched
      });
  }, []); // Empty dependency array to run only once on component mount

  // Conditional rendering based on loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Property Listings</h1>
      <div>
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property._id}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p>Price: {property.price}</p>
            </div>
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>

      <h1>Vehicle Listings</h1>
      <div>
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div key={vehicle._id}>
              <h3>{vehicle.title}</h3>
              <p>{vehicle.description}</p>
              <p>Price: {vehicle.price}</p>
              <p>Type: {vehicle.type}</p>
            </div>
          ))
        ) : (
          <p>No vehicles available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
