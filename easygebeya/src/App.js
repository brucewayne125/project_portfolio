import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PropertyForm from "./components/PropertyForm"; // Import PropertyForm
import VehicleForm from "./components/VehicleForm";   // Import VehicleForm

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add-property" element={<PropertyForm />} /> {/* Route for PropertyForm */}
            <Route path="/add-vehicle" element={<VehicleForm />} />   {/* Route for VehicleForm */}
          </Routes>
        </div>
        <Footers />
      </div>
    </Router>
  );
};

export default App;
