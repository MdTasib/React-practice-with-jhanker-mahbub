import React from "react";

const student = {
	name: "Tasib",
	age: 19,
};

const color = {
	color: "white",
	background: "black",
};

const users = [
	{ name: "Tasib", age: 19 },
	{ name: "Rafi", age: 23 },
	{ name: "Rakib", age: 18 },
];

const Core_Concept = () => {
	return (
		<div>
			<h2>React 6 core concept</h2>
			<p style={color}>Name : {student.name}</p>
			<p style={{ color: "red", backgroundColor: "green" }}>
				Age : {student.age}
			</p>

			{/* <Person name='Tasib' age='19' />
			<Person name='Rafi' age='23' />
			<Person name='Rakib' age='18' /> */}

			{users.map(user => (
				<Person name={user.name} age={user.age} />
			))}
		</div>
	);
};

// create new component
function Person(props) {
	return (
		<div
			style={{
				backgroundColor: "lightBlue",
				padding: "20px",
				margin: "20px",
				borderRadius: "20px",
			}}>
			<h3>Name: {props.name}</h3>
			<h5>age: {props.age}</h5>
			<p>Profession: Web developer</p>
		</div>
	);
}

export default Core_Concept;
