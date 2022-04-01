import React from "react";

const Cart = ({ cart, removeItem }) => {
	return (
		<div>
			<h4>Shopping Cart</h4>
			{cart.map(pd => (
				<div key={pd._id}>
					<p>{pd.name}</p>
					<button onClick={() => removeItem(pd)}>X</button>
				</div>
			))}
		</div>
	);
};

export default Cart;
