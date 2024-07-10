// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Adjust the path as per your file structure
import Blog from "./pages/Blog"; // Adjust the path as per your file structure
import Design from "./pages/Design"; // Adjust the path as per your file structure

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/design" element={<Design />} />
    </Routes>
  );
}

export default App;
