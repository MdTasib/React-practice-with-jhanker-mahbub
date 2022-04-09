import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
	const { user, handleSingOut } = useFirebase();

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/orders'>Orders</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
					<li>
						{user?.uid ? (
							<button onClick={handleSingOut}>Sing Out</button>
						) : (
							<Link to='/login'>Login</Link>
						)}
						{user?.displayName && user.displayName}
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
