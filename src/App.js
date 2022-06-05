import React from "react";

// Router for Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      {/* Router */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Paths */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
