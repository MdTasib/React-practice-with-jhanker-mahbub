import React, { useRef, useState, useEffect } from "react";

function Todo(props) {
	const [loading, setLoading] = useState(true);
	const [todo, setTodo] = useState({});

	const isMounted = useRef(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then(res => res.json())
			.then(data => {
				setTimeout(() => {
					if (isMounted.current) {
						setTodo(data);
						setLoading(false);
					}
				}, 1000);
			});

		return () => (isMounted.current = false);
	}, [isMounted]);

	return loading ? <p>Loading.....</p> : <h2>{todo.title}</h2>;
}

export default Todo;
