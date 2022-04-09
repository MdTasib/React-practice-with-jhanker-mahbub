import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
	const [user, setUser] = useState({});

	const singInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				const user = result.user;
				console.log(user);
				setUser(user);
			})
			.catch(error => console.log(error.message));
	};

	return { user, setUser, singInWithGoogle };
};

export default useFirebase;
