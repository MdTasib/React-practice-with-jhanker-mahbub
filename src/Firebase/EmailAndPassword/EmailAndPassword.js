import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase.init";
import { Button, Form } from "react-bootstrap";

const auth = getAuth(app);

const EmailAndPassword = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [register, setRegister] = useState(false);
	const [error, setError] = useState("");
	const [validated, setValidated] = useState(false);

	const handleEmail = event => {
		setEmail(event.target.value);
	};

	const handlePassword = event => {
		setPassword(event.target.value);
	};

	const handleCheckBox = event => {
		setRegister(event.target.checked);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();
			setError("Please a valid email and pass");
			return;
		}

		setValidated(true);
		setError("");

		if (register) {
			signInWithEmailAndPassword(auth, email, password)
				.then(result => {
					const user = result.user;
					setEmail("");
					setPassword("");
					console.log(user);
				})
				.catch(error => {
					console.error(error);
					setError(error.message);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(result => {
					const user = result.user;
					setEmail("");
					setPassword("");
					verifyEmail();
					console.log(user);
				})
				.catch(error => {
					console.error(error);
					setError(error.message);
				});
		}
	};

	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser).then(() =>
			console.log("Email varification send")
		);
	};

	const handleForgetPassword = () => {
		sendPasswordResetEmail(auth, email).then(() => {
			console.log("send forget password message in your email");
		});
	};

	return (
		<div className='w-50 mx-auto mt-5'>
			<h3 className='text-primary'>
				Please {register ? "Login" : "Register"}!!!
			</h3>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onBlur={handleEmail}
						type='email'
						placeholder='Enter email'
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a valid Email.
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						onBlur={handlePassword}
						type='password'
						placeholder='Password'
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a valid Password.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check
						onChange={handleCheckBox}
						type='checkbox'
						label='Already Registered ?'
					/>
				</Form.Group>
				<p className='text-danger'>{error}</p>
				<Button variant='primary' type='submit'>
					{register ? "Login" : "Register"}
				</Button>
				<Button
					onClick={handleForgetPassword}
					className='ms-4'
					variant='primary'>
					Forget Password ?
				</Button>
			</Form>
		</div>
	);
};

export default EmailAndPassword;
