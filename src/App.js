import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Card";
import Name from "./Name";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/name/:id" element={<Name />} />
      </Routes>
    </div>
  );
}

export default App;
