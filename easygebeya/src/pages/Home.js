import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch properties data
    axios.get('http://localhost:5000/api/properties')
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the properties!", error);
      });

    // Fetch vehicles data
    axios.get('http://localhost:5000/api/vehicles')
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the vehicles!", error);
      });
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>{property.title}</li>
        ))}
      </ul>

      <h1>Vehicles</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle._id}>{vehicle.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
