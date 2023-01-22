import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ModalMessage from "../pages/ModalMessage";
import Produccts from "../pages/Produccts";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Produccts />
          </PrivateRoute>
        }
      />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/modelmsg" element={<ModalMessage />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
