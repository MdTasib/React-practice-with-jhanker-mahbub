import React, { useState, useEffect } from "react";

const LoadUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => setUsers(data));
	}, []);

	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};

function User({ user }) {
	return (
		<div>
			<h3>Name : {user.name}</h3>
			<p>Email : {user.email}</p>
		</div>
	);
}

export default LoadUsers;
