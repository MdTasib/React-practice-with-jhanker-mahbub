import React from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import useTshirt from "../Hooks/useTshirt";
import Shirt from "../Shirt.js/Shirt";

const Home = () => {
	const [shirts, setShirts] = useTshirt();

	return (
		<div className='grid grid-cols--3_1'>
			<div className='shirt-container grid grid-cols--3 g-3'>
				{shirts.map(shirt => (
					<Shirt key={shirt._id} shirt={shirt} />
				))}
			</div>
			<div className='shopping-cart-container'>
				<Cart />
			</div>
		</div>
	);
};

export default Home;
