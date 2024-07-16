// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Design from "./pages/Design";
import Soon from "./pages/Soon";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/design" element={<Design />} />
      <Route path="/soon" element={<Soon />} />
    </Routes>
  );
}

export default App;
