import React from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";
import { Button, Form } from "react-bootstrap";

const auth = getAuth(app);

const EmailAndPassword = () => {
	const handleEmail = event => {
		console.log(event.target.value);
	};

	const handlePassword = event => {
		console.log(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log("form submited");
	};

	return (
		<div className='w-50 mx-auto mt-5'>
			<h3>User Email And Password</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onBlur={handleEmail}
						type='email'
						placeholder='Enter email'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						onBlur={handlePassword}
						type='password'
						placeholder='Password'
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default EmailAndPassword;
