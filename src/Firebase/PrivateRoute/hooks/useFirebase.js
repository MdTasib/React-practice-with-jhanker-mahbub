import { useEffect, useState } from "react";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
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

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	const handleSingOut = () => {
		signOut(auth).then(() => {});
	};

	return { user, setUser, singInWithGoogle, handleSingOut };
};

export default useFirebase;
