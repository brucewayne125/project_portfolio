import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route/>
      </Routes>
      <Footers />
    </Router>
  );
};

export default App;