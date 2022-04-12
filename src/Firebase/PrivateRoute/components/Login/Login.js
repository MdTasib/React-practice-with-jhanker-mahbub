import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
	const { singInWithGoogle } = useFirebase();
	const location = useLocation();
	const navigate = useNavigate();

	const from = location?.state?.from?.pathname || "/";

	const handleLoginWithGoogle = () => {
		singInWithGoogle();
		navigate(from, { replace: true });
	};

	return (
		<div>
			<h3>Please Login !!!</h3>
			<div>
				<button onClick={handleLoginWithGoogle}>Google Sing In</button>
			</div>
			<form>
				<input type='email' placeholder='Your Email' />
				<br />
				<input type='password' placeholder='Your Password' />
				<br />
				<input type='submit' value='Login' />
			</form>
		</div>
	);
};

export default Login;
