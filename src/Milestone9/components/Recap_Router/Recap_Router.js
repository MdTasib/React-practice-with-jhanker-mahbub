import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import OrderReview from "./OrderReview/OrderReview";

const Recap_Router = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/orderreview'>Order Review</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/orderreview' element={<OrderReview />} />
			</Routes>
		</div>
	);
};

export default Recap_Router;
