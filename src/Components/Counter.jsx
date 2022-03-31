import React, { useState } from 'react';

function Counter() {
	const [timer, setTimer] = useState(0);
	const increment = () => {
		setTimer(timer + 1);
	};
	const decrement = () => {
		setTimer(timer - 1);
	};
	return (
		<div>
			<h1>{timer}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default Counter;
