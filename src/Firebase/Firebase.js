import React from "react";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const Firebase = () => {
	return <div>firebase init</div>;
};

export default Firebase;
