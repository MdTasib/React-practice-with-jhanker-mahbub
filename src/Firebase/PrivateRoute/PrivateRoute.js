import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const PrivateRoute = () => {
	return (
		<div>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/orders'
					element={
						<RequireAuth>
							<Orders />
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
};

export default PrivateRoute;
