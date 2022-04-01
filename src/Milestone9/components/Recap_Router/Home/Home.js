import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Home.css";
import useTshirt from "../Hooks/useTshirt";
import Shirt from "../Shirt.js/Shirt";

const Home = () => {
	const [shirts, setShirts] = useTshirt();
	const [cart, setCart] = useState([]);

	const handleAddToCart = selectedItem => {
		const exists = cart.find(pd => pd._id === selectedItem._id);
		if (!exists) {
			const newCart = [...cart, selectedItem];
			setCart(newCart);
		} else {
			alert("do not added product");
		}
	};

	const removeItem = selectedItem => {
		const rest = cart.filter(product => product._id !== selectedItem._id);
		setCart([...rest]);
	};

	return (
		<div className='grid grid-cols--3_1'>
			<div className='shirt-container grid grid-cols--3 g-3'>
				{shirts.map(shirt => (
					<Shirt
						key={shirt._id}
						shirt={shirt}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
			<div className='shopping-cart-container'>
				<Cart removeItem={removeItem} cart={cart} />
			</div>
		</div>
	);
};

export default Home;
