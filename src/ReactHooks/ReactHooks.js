import React from "react";
import RefExample1 from "./components/RefExample1";
import RefExample2 from "./components/RefExample2";

function ReactHooks(props) {
	return (
		<>
			<div className='text-center bg-info text-white p-3 fw-bold'>
				<h3>React Hooks</h3>
			</div>
			{/* <RefExample1 /> */}
			<RefExample2 />
		</>
	);
}

export default ReactHooks;
