import React from "react";
import "../Home/Home.css";

const Shirt = props => {
	const { name, picture, price } = props.shirt;

	return (
		<div className=''>
			<img src={picture} alt='' width='250' height='300' />
			<h5>{name}</h5>
			<p>Price : $ {price}</p>
			<button>Add to cart</button>
		</div>
	);
};

export default Shirt;
