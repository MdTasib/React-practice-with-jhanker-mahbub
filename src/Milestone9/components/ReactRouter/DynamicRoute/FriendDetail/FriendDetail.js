import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
	const [friend, setFriend] = useState({});
	// const params = useParams();
	const { friendId } = useParams();

	useEffect(() => {
		(async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users/${friendId}`
			);
			const data = await res.json();
			setFriend(data);
		})();
	}, [friendId]);

	return (
		<div>
			{/* <h3>Friend Details - {params.friendId}</h3> */}
			<h3>Friend Details - {friendId}</h3>
			<h2>Name: {friend.name}</h2>
			<h6>User Name : {friend.username}</h6>
			<p>Email : {friend.email}</p>
		</div>
	);
};

export default FriendDetail;
