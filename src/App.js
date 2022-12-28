import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Home, Footer } from "./components/index";
import {
  About,
  Register,
  Login,
  Shopping,
  Thongtincanhan,
  Quanlykhachhang,
  Quanlysanpham,
  Contact,
  Checkout,
  Cart
} from "./page/index";
import { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

//App 
function App() {
  return (


    <>
     <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="homepage" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/thongtincanhan" element={<Thongtincanhan />} />
        <Route path="/quanlykhachhang" element={<Quanlykhachhang />} />
        <Route path="/quanlysanpham" element={<Quanlysanpham />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
      <Footer />
      </CartProvider>

    </>
  );
}

export default App;
