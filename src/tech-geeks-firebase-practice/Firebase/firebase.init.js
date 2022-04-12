import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAM6XOhNl1VTDJybmDmJaqqasUpDRRbHTE",
	authDomain: "practice-firebase-4157f.firebaseapp.com",
	projectId: "practice-firebase-4157f",
	storageBucket: "practice-firebase-4157f.appspot.com",
	messagingSenderId: "388025200942",
	appId: "1:388025200942:web:64322fcfacb7fb65910abf",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
