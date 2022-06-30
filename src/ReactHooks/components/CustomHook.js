import React from "react";
import useFetch from "../Hooks/useFetch";

function CustomHook1() {
	const { data, loading, error } = useFetch(
		"https://jsonplaceholder.typicode.com/todos"
	);

	if (loading) {
		return <h3>Loading...</h3>;
	} else if (error) {
		return <h4 className='text-danger'>{error}</h4>;
	}

	return (
		<div className='container mx-auto text-center'>
			<h3>Custom Hook - useFetch</h3>
			{data.map(todo => (
				<p key={todo.id}>{todo.title}</p>
			))}
		</div>
	);
}

export default CustomHook1;
