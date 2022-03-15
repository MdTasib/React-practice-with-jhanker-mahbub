import React from "react";

const student = {
	name: "Tasib",
	age: 19,
};

const color = {
	color: "white",
	background: "black",
};

const Core_Concept = () => {
	return (
		<div>
			<h2>React 6 core concept</h2>
			<p style={color}>Name : {student.name}</p>
			<p style={{ color: "red", backgroundColor: "green" }}>
				Age : {student.age}
			</p>

			<Person />
			<Person />
			<Person />
		</div>
	);
};

// create new component
function Person() {
	return (
		<div
			style={{
				backgroundColor: "lightBlue",
				padding: "20px",
				margin: "20px",
				borderRadius: "20px",
			}}>
			<h3>Name: Tasib</h3>
			<h5>age: 19</h5>
			<p>Profession: Web developer</p>
		</div>
	);
}

export default Core_Concept;
