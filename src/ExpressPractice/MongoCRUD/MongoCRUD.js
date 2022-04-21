import React from "react";

const MongoCRUD = () => {
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
	return (
		<div>
			<h2>Mongo CRUD</h2>
			<form onSubmit={handlePostData}>
				<input type='text' name='name' placeholder='name' />
				<input type='email' name='email' placeholder='email' />
				<input type='submit' value='Add User' />
			</form>
		</div>
	);
};

export default MongoCRUD;
