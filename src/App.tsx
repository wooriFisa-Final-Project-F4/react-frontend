import React from "react";
import "./App.css";
import { Header } from "./Home/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
