import './App.scss';
import React, { useState } from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import PostList from './Components/PostList';
import MyButton from './UI/button/MyButton.jsx';
import MyInput from './UI/input/MyInput.jsx';
import Form from './Components/Form';

function App() {
	const [postData, setPostData] = useState([
		{ id: 1, title: 'Java', text: 'Java is a programming language' },
		{ id: 2, title: 'C++', text: 'C++ is a programming language' },
		{ id: 3, title: 'C#', text: 'C# is a programming language' },
		{ id: 4, title: 'Go', text: 'Go is a programming language' },
	]);
	const [postData1, setPostData1] = useState([
		{ id: 11, title: 'Earth', text: 'Earth is a planet' },
		{ id: 21, title: 'Mercury', text: 'Mercury is a planet' },
		{ id: 31, title: 'Saturn', text: 'Saturn is a planet' },
		{ id: 41, title: 'Mars', text: 'Mars is a planet' },
	]);

	return (
		<div className="App">
			<Form />
			<Counter />
			<ClassCounter />
			<PostList title={'Programming'} postData={postData} />
			<PostList title={'Planets'} postData={postData1} />
		</div>
	);
}

export default App;
