import React, { useState } from "react";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const GoogleSingIn = () => {
	const [user, setUser] = useState({});

	const provider = new GoogleAuthProvider();
	const handleSingIn = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				setUser(user);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const handleSingOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch(error => console.log(error));
	};

	return (
		<div>
			{user.email ? (
				<button onClick={handleSingOut}>Sing Out</button>
			) : (
				<button onClick={handleSingIn}>Google Log In</button>
			)}
			<h3>{user.displayName}</h3>
			<p>{user.email}</p>
			<img src={user.photoURL} alt='' />
		</div>
	);
};

export default GoogleSingIn;
