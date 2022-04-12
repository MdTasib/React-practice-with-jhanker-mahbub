import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";

const Navbar = () => {
	const { pathname } = useLocation();
	const [user, setUser] = useState({});
	console.log(user);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
		});
	}, []);

	const handleLogOut = () => {
		signOut(auth)
			.then(() => {})
			.catch(error => console.log(error.message));
	};

	return (
		<nav
			style={
				pathname.includes("blog") ? { display: "none" } : { display: "flex" }
			}>
			<div className='logo-container'>
				<img src={Logo} alt='' />
			</div>
			<div className='link-container'>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : "link")}
					to='/'>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "active-link" : "link")}
					to='/videos'>
					Videos
				</NavLink>
				{user.uid ? (
					<button className='logout-button' onClick={handleLogOut}>
						Log Out
					</button>
				) : (
					<NavLink
						className={({ isActive }) => (isActive ? "active-link" : "link")}
						to='/login'>
						Login
					</NavLink>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
