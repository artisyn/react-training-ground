import './App.scss';
import React, { useState } from 'react';

function App() {
	const [value, setValue] = useState(0);
	const [text, setText] = useState('Text');
	return (
		<div className="App">
			<h1>{value}</h1>
			<h1>{text}</h1>
			<input
				type="text"
				name=""
				id=""
				// value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setValue(value + 1);
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					setValue(value - 1);
				}}
			>
				Decrement
			</button>
		</div>
	);
}

export default App;
