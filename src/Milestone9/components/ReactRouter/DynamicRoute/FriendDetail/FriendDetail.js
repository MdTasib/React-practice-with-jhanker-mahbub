import React from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
	// const params = useParams();
	const { friendId } = useParams();
	return (
		<div>
			{/* <h3>Friend Details - {params.friendId}</h3> */}
			<h3>Friend Details - {friendId}</h3>
		</div>
	);
};

export default FriendDetail;
