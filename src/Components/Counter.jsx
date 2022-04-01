import React, { useState } from 'react';
import '../Components/Counter.scss';

function Counter() {
	const [timer, setTimer] = useState(0);
	const increment = () => {
		setTimer(timer + 1);
	};
	const decrement = () => {
		setTimer(timer - 1);
	};
	return (
		<div className="counter__container">
			<h1 className="main__title">Counter</h1>
			<h1>{timer}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default Counter;
