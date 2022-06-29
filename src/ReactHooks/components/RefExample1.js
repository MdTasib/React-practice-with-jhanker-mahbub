import React from "react";
import { useState, useRef } from "react";

function RefExample1() {
	const inputRef = useRef();
	const [text, setText] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		setText(inputRef.current.value);
	};
	return (
		<div className='container mx-auto'>
			<h3 className='text-center'>useRef Example 1</h3>
			<form onSubmit={handleSubmit}>
				<div class='mb-3'>
					<label
						onClick={() => inputRef.current.focus()}
						for='exampleFormControlInput1'
						class='form-label'>
						Text Here
					</label>
					<input ref={inputRef} class='form-control mb-2' />
					<button type='submit' className='btn btn-info'>
						Submit
					</button>
					<p>Your Type is - {text}</p>
				</div>
			</form>
		</div>
	);
}

export default RefExample1;
