import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Product from "../pages/product/product";
import Register from "../pages/signup/register";
import Login from "../pages/login/login";
import Profile from "../pages/profile";
import Cart from "../pages/cart/cart";
import DetailProduct from "../pages/product/productDetail";
import Checkout from "../pages/checkout/checkout";
import History from "../pages/history";
import Admin from "../pages/admin";

function Routers() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/products" element={<Product />} />
				<Route exact path="/admin" element={<Admin />} />
				<Route exact path="/products/detail/:id" element={<DetailProduct />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route exact path="/cart/:id" element={<Cart />} />
				<Route exact path="/checkout/:id" element={<Checkout />} />
				<Route exact path="/history" element={<History />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routers;
