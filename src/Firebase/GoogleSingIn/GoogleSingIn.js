import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const GoogleSingIn = () => {
	const provider = new GoogleAuthProvider();
	const handleWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div>
			<button onClick={handleWithGoogle}>Google Log In</button>
		</div>
	);
};

export default GoogleSingIn;
