import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/index'
import Login from '../pages/login/login'
import Product from '../pages/product/product'
import Register from '../pages/signup/register'

function router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/products" element={<Product />} />
				
			</Routes>
		</BrowserRouter>
	)
}

export default router