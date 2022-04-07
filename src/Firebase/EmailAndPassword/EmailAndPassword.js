import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase.init";
import { Button, Form } from "react-bootstrap";

const auth = getAuth(app);

const EmailAndPassword = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [validated, setValidated] = useState(false);

	const handleEmail = event => {
		setEmail(event.target.value);
	};

	const handlePassword = event => {
		setPassword(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.stopPropagation();
			return;
		}

		setValidated(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
			})
			.catch(error => console.error(error));
	};

	return (
		<div className='w-50 mx-auto mt-5'>
			<h3>User Email And Password</h3>
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
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default EmailAndPassword;
