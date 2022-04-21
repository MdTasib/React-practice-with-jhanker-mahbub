import React, { useEffect, useState } from "react";

const FirstNode = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then(res => res.json())
			.then(data => setUsers(data));
	}, []);

	const handleSubmit = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const user = { name, email };
		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(data => console.log(data));
	};

	return (
		<div>
			<h3>First Node Js</h3>
			{users.map(user => (
				<p key={user.id}>{user.name}</p>
			))}
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' />
				<input type='email' name='email' />
				<input type='submit' value='Add User' />
			</form>
		</div>
	);
};

export default FirstNode;
