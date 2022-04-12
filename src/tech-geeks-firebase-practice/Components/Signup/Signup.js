import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import auth from "../../Firebase/firebase.init";

const provider = new GoogleAuthProvider();

const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState({ value: "", error: "" });
	const [password, setPassword] = useState({ value: "", error: "" });
	const [confirmPassword, setConfirmPassword] = useState({
		value: "",
		error: "",
	});

	const handleEmail = event => {
		const emailField = event.target.value;
		if (/\S+@\S+\.\S+/.test(emailField)) {
			setEmail({ value: emailField, error: "" });
		} else {
			setEmail({ value: "", error: "Invalid Email" });
		}
	};

	const handlePassword = event => {
		const passwordField = event.target.value;
		if (passwordField.length < 6) {
			setPassword({ value: "", error: "Password must be 6 character" });
		} else {
			setPassword({ value: passwordField, error: "" });
		}
	};

	const handleConfirmPassword = event => {
		const passwordField = event.target.value;
		if (passwordField !== password.value) {
			setConfirmPassword({ value: "", error: "Did not match password" });
		} else {
			setConfirmPassword({ value: passwordField, error: "" });
		}
	};

	const handleGoogleAuth = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				navigate("/");
				if (user.uid) {
					toast.success("User Login Successfully");
				}
			})
			.catch(error => toast.error(error.message));
	};

	const handleSingUp = event => {
		event.preventDefault();

		if (
			email.value &&
			password.value &&
			password.value === confirmPassword.value
		) {
			createUserWithEmailAndPassword(auth, email.value, password.value)
				.then(result => {
					const user = result.user;
					if (user.uid) {
						toast.success("User Sing Up Successfully");
					}
				})
				.catch(error => toast.error(error.message));
		}
	};

	return (
		<div className='auth-form-container '>
			<div className='auth-form'>
				<h1>Sign Up</h1>
				<form onSubmit={handleSingUp}>
					<div className='input-field'>
						<label htmlFor='email'>Email</label>
						<div className='input-wrapper'>
							<input
								type='email'
								name='email'
								id='email'
								required
								onBlur={handleEmail}
							/>
						</div>
						{email?.error && <p className='error'>{email.error}</p>}
					</div>
					<div className='input-field'>
						<label htmlFor='password'>Password</label>
						<div className='input-wrapper'>
							<input
								type='password'
								name='password'
								id='password'
								required
								onBlur={handlePassword}
							/>
						</div>
						{password?.error && <p className='error'>{password.error}</p>}
					</div>
					<div className='input-field'>
						<label htmlFor='confirm-password'>Confirm Password</label>
						<div className='input-wrapper'>
							<input
								type='password'
								name='confirmPassword'
								id='confirm-password'
								required
								onBlur={handleConfirmPassword}
							/>
						</div>
						{confirmPassword?.error && (
							<p className='error'>{confirmPassword.error}</p>
						)}
					</div>
					<button type='submit' className='auth-form-submit'>
						Sign Up
					</button>
				</form>
				<p className='redirect'>
					Already have an account?{" "}
					<span onClick={() => navigate("/login")}>Login</span>
				</p>
				<div className='horizontal-divider'>
					<div className='line-left' />
					<p>or</p>
					<div className='line-right' />
				</div>
				<div className='input-wrapper'>
					<button className='google-auth' onClick={handleGoogleAuth}>
						<img src={GoogleLogo} alt='' />
						<p> Continue with Google </p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
