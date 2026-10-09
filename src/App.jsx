import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Splash from "./Pages/Splash";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import MyProfile from "./Pages/MyProfile";
import Users from "./Pages/Users";
import AddProduct from "./Pages/AddProduct";
import BottomBar from "./Components/BottomBar";
import Home from "./Pages/Home";
import OrderDetail from "./Pages/OrderDetail";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />


        <Route path="/home" element={<Home />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/order-detail" element={<OrderDetail />} />

        <Route path="/profile" element={<MyProfile />} />

        <Route path="/users" element={<Users />} />

        <Route path="/bottom" element={<BottomBar />} />

      </Routes>
    </Router>
  );
};

export default App;