import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
	const [allPosts, setPosts] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			const data = await res.json();
			setPosts(data);
		})();
	}, []);

	return (
		<div>
			<h3>Posts</h3>
			<Outlet />
			{allPosts.slice(0, 20).map(post => (
				<div key={post.id}>
					<h4>{post.title}</h4>
					<Link to={`/posts/${post.id}`}>{post.id}</Link>
				</div>
			))}
		</div>
	);
};

export default Posts;
