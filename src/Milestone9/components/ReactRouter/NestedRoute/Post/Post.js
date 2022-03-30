import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
	const { postId } = useParams();
	const [isPost, setPost] = useState({});

	useEffect(() => {
		(async () => {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`
			);
			const data = await res.json();
			setPost(data);
		})();
	}, [postId]);

	return (
		<div>
			<h4>post - {postId}</h4>
			<p>{isPost.title}</p>
			<p>{isPost.body}</p>
		</div>
	);
};

export default Post;
