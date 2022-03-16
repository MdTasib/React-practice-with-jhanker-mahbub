import React, { useState } from "react";

const Counter = () => {
	let [count, setCount] = useState(0);

	const increaseCount = () => setCount(count + 1);
	const decreaseCount = () => setCount(count - 1);

	return (
		<div>
			<h3>Count : {count}</h3>
			<button onClick={increaseCount}>Increase</button>
			<button onClick={decreaseCount}>Decrease</button>
		</div>
	);
};

export default Counter;
