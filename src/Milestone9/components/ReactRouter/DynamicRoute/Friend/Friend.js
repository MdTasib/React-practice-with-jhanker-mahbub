import React from "react";
import { useNavigate } from "react-router-dom";

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
		</div>
	);
};

export default Friend;
