import React from "react";
import EmailAndPassword from "./EmailAndPassword/EmailAndPassword";
import GoogleSingIn from "./GoogleSingIn/GoogleSingIn";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const Firebase = () => {
	return (
		<div>
			{/* <GoogleSingIn /> */}
			{/* <EmailAndPassword /> */}
			<PrivateRoute />
		</div>
	);
};

export default Firebase;
