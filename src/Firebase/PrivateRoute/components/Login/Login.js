import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
	const { singInWithGoogle } = useFirebase();

	return (
		<div>
			<h3>Please Login !!!</h3>
			<div>
				<button onClick={singInWithGoogle}>Google Sing In</button>
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
