import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	console.log(cart);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/mir-hussain/boots-data/main/data.json"
		)
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);

	// const handleAddToCart = selectedProduct => {
	// 	const newCart = [...cart, selectedProduct];
	// 	setCart(newCart);
	// };

	const handleAddToCart = selectedProduct => {
		let newCart = [];
		const exist = cart.find(product => product.id === selectedProduct.id);

		if (!exist) {
			selectedProduct.quantity = 1;
			newCart = [...cart, selectedProduct];
		} else {
			const rest = cart.filter(product => product.id !== selectedProduct.id);
			selectedProduct.quantity += 1;
			newCart = [...rest, selectedProduct];
		}

		setCart(newCart);
	};

	const handleClearCart = () => {
		setCart([]);
	};

	return (
		<>
			<div className='shop'>
				<div className='products-container'>
					{products.map((product, index) => {
						return (
							<Product
								key={index}
								product={product}
								handleAddToCart={handleAddToCart}
							/>
						);
					})}
				</div>
				<div className='cart-container'>
					<Cart
						cart={cart}
						products={products}
						handleClearCart={handleClearCart}
					/>
				</div>
			</div>
		</>
	);
};

export default Shop;
