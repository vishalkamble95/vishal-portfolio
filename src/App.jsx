import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#222831] transition-colors duration-500">
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}
