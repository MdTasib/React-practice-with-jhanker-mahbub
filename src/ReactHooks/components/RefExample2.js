import React from "react";
import { useState } from "react";
import Todo from "./Todo";

function RefExample2(props) {
	const [showTodo, setShowTodo] = useState(true);

	return (
		<div className='container mx-auto'>
			<h3 className='text-center'>useRef Example 2</h3>
			{showTodo && <Todo />}
			<button
				className='btn btn-primary'
				onClick={() => setShowTodo(!showTodo)}>
				Toggole Todo
			</button>
		</div>
	);
}

export default RefExample2;
