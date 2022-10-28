import React from "react";
import { Routes, Route } from "react-router-dom";
import Dishes from "./components/dishes/index.js";
import Login from "./components/login/index.js";
import Result from "./components/result/index.js";
import Tabs from "./components/tabs/index.js";
import { Navigate } from "react-router-dom";
import SelectedDishes from "./components/tabs/selecteddishes.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Tabs />} />
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/selecteddishes" element={<SelectedDishes />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
