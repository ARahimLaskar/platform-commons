import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductIndividual } from "../components/ProductIndividual";
import { Product } from "../Pages/Product";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/cart" element={<ProductIndividual />} />
    </Routes>
  );
};
