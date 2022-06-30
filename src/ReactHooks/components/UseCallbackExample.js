import React, { useCallback, useState } from "react";

function UseCallbackExample(props) {
	const [tasks, setTasks] = useState([]);

	// when button is click, component will re-render
	// const addTask = () => {
	// 	setTasks(prev => [...prev, "Some task"]);
	// };

	// component won't re-render second time
	const addTask = useCallback(() => {
		setTasks(prev => [...prev, "Some task"]);
	}, []);

	return (
		<div className='container mx-auto text-center'>
			<h3 className='py-3'>UseCallbackExample</h3>
			<Button addTask={addTask} />

			{tasks.map((task, index) => (
				<p key={index}>{task}</p>
			))}
		</div>
	);
}

// when button is click, component will re-render
// const Button = ({ addTask }) => {
// 	console.log("button render");
// 	return (
// 		<button onClick={addTask} className='btn btn-primary'>
// 			Click
// 		</button>
// 	);
// };

// component won't re-render second time
const Button = React.memo(({ addTask }) => {
	console.log("button render");
	return (
		<button onClick={addTask} className='btn btn-primary'>
			Click
		</button>
	);
});

export default UseCallbackExample;
