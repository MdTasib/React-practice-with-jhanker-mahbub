import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const data = await response.json();
			setFriends(data);
		};

		fetchData().catch(error => console.log(error.message));
	}, []);

	return (
		<div>
			<h2>Friends List - {friends.length}</h2>

			{friends.map(friend => (
				<Friend key={friend.id} friend={friend} />
			))}
		</div>
	);
};

export default Friends;
