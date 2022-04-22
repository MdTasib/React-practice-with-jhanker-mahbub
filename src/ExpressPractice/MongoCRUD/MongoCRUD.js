import React, { useState, useEffect } from "react";

const MongoCRUD = () => {
	const [users, setUsers] = useState([]);

	// load all user
	useEffect(() => {
		fetch("http://localhost:5000/user")
			.then(res => res.json())
			.then(data => setUsers(data));
	}, []);

	const handlePostData = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const user = { name, email };

		// send data to the server
		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then(res => res.json())
			.then(data => {
				alert("user added successfully");
				event.target.reset();
			});
	};

	// delete
	const handleDelete = id => {
		const confirmDelete = window.confirm("Are you sure delete this item ?");
		if (confirmDelete) {
			fetch(`http://localhost:5000/user/${id}`, {
				method: "DELETE",
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						console.log("deleted");
						const remaining = users.filter(user => user._id !== id);
						setUsers(remaining);
					}
				});
		}
	};

	return (
		<div>
			<h2>Mongo CRUD</h2>
			<form onSubmit={handlePostData}>
				<input type='text' name='name' placeholder='name' />
				<input type='email' name='email' placeholder='email' />
				<input type='submit' value='Add User' />
			</form>
			<div className='py-3'>
				<ul>
					{users.map(user => (
						<li key={user._id}>
							{user.name} - {user.email}
							<button onClick={() => handleDelete(user._id)}>X</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MongoCRUD;
