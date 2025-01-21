import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
      <Footers />
    </Router>
  );
};

export default App;