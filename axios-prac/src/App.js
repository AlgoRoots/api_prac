import "./App.css";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseURL from "./BaseURL";
import Basic from "./Basic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/instance" element={<BaseURL />} />
      </Routes>
    </>
  );
}

export default App;
