import './App.scss';
import React, { useState, useRef, useMemo } from 'react';
import PostList from './Components/PostList';
import Form from './Components/Form';
import MyModal from './UI/modal/MyModal';
import PostFilter from './Components/PostFilter';

function App() {
	const [postData, setPostData] = useState([
		{ id: 1, title: 'Java', text: 'dJava is a programming language' },
		{ id: 2, title: 'C++', text: 'cC++ is a programming language' },
		{ id: 3, title: 'C#', text: 'bC# is a programming language' },
		{ id: 4, title: 'Go', text: 'aGo is a programming language' },
	]);
	const [postData1, setPostData1] = useState([
		{ id: 11, title: 'Earth', text: 'Earth is a planet' },
		{ id: 21, title: 'Mercury', text: 'Mercury is a planet' },
		{ id: 31, title: 'Saturn', text: 'Saturn is a planet' },
		{ id: 41, title: 'Mars', text: 'Mars is a planet' },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });

	const createPost = (newPost) => {
		setPostData([...postData, newPost]);
	};

	const removePost = (post) => {
		setPostData(postData.filter((el) => el.id !== post.id));
		setPostData1(postData1.filter((el) => el.id !== post.id));
	};

	const sortedPosts = useMemo(() => {
		console.log('useMemo worked');
		if (filter.sort) {
			return [...postData].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			);
		}
		console.log('last');
		return postData;
	}, [filter.sort, postData]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter((post) =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		);
	}, [filter.query, sortedPosts]);

	return (
		<div className="App">
			<MyModal>
				<Form create={createPost} />
			</MyModal>

			<hr style={{ margin: '1rem' }} />
			<PostFilter filter={filter} setFilter={setFilter} />

			{/* <Counter />
			<ClassCounter /> */}
			<PostList
				title={'Programming'}
				postData={sortedAndSearchedPosts}
				remove={removePost}
			/>
			<PostList
				remove={removePost}
				title={'Planets'}
				postData={postData1}
			/>
		</div>
	);
}

export default App;

// 1.26
