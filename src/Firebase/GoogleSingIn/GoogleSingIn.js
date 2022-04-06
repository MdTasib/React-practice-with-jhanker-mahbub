import React, { useState } from "react";
import {
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const GoogleSingIn = () => {
	const [user, setUser] = useState({});

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const handleSingIn = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				const user = result.user;
				setUser(user);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const handleGithubSingIn = () => {
		signInWithPopup(auth, githubProvider)
			.then(result => {
				const user = result.user;
				setUser(user);
			})
			.catch(error => console.log(error));
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
			{user.uid ? (
				<button onClick={handleSingOut}>Sing Out</button>
			) : (
				<>
					<button onClick={handleSingIn}>Google Log In</button>
					<button onClick={handleGithubSingIn}>Github Log In</button>
				</>
			)}
			<h3>{user.displayName}</h3>
			<p>{user.email}</p>
			<img src={user.photoURL} alt='' />
		</div>
	);
};

export default GoogleSingIn;
