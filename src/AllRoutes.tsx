import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "./pages/Dashboard";
import { Blueprints } from "./pages/Blueprints";
import { ContractDetail } from "./pages/ContractDetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/blueprints" element={<Blueprints />} />
      <Route path="/contracts/:contractId" element={<ContractDetail />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AllRoutes;
