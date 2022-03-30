import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
	const { name, username, id } = friend;

	const navigate = useNavigate();
	const showFriendDetail = async () => {
		// navigate(`/friend/${id}`);
		const path = await `/friend/${id}`;
		navigate(path);
	};

	return (
		<div>
			<h4>{name}</h4>
			<button onClick={showFriendDetail}>
				{username} - {id}
			</button>
			<br />
			<Link to={`/friend/${id}`}>Click Me</Link>
		</div>
	);
};

export default Friend;
