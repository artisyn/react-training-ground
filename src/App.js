import './App.scss';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import PostList from './Components/PostList';
import Form from './Components/Form';
import MyModal from './UI/modal/MyModal';
import PostFilter from './Components/PostFilter';
import MyButton from './UI/button/MyButton';
import { usePosts } from './hooks/usePost';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPagesArray, getPagesCount } from './utils/pages';

function App() {
	const [modal, setModal] = useState(false);
	const [postData, setPostData] = useState([]);
	const [postData1, setPostData1] = useState([
		{ id: 11, title: 'Earth', text: 'Earth is a planet' },
		{ id: 21, title: 'Mercury', text: 'Mercury is a planet' },
		{ id: 31, title: 'Saturn', text: 'Saturn is a planet' },
		{ id: 41, title: 'Mars', text: 'Mars is a planet' },
	]);

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		console.log(response);
		setPostData(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPagesCount(totalCount, limit));
	});

	let pagesArray = getPagesArray(totalPages);

	console.log(pagesArray);

	const createPost = (newPost) => {
		setPostData([...postData, newPost]);
		setModal(false);
	};

	const removePost = (post) => {
		setPostData(postData.filter((el) => el.id !== post.id));
		setPostData1(postData1.filter((el) => el.id !== post.id));
	};
	const sortedAndSearchedPosts = usePosts(
		postData,
		filter.sort,
		filter.query
	);

	useEffect(() => {
		fetchPosts();
	}, []);

	// const fetchPosts = async () => {
	// 	setIsPostLoading(true);
	// 	const posts = await PostService.getAll();
	// 	console.log(posts);
	// 	setPostData(posts);
	// 	setIsPostLoading(false);
	// };

	// const sortedPosts = useMemo(() => {
	// 	console.log('useMemo worked');
	// 	if (filter.sort) {
	// 		return [...postData].sort((a, b) =>
	// 			a[filter.sort].localeCompare(b[filter.sort])
	// 		);
	// 	}
	// 	console.log('last');
	// 	return postData;
	// }, [filter.sort, postData]);

	// const sortedAndSearchedPosts = useMemo(() => {
	// 	return sortedPosts.filter((post) =>
	// 		post.title.toLowerCase().includes(filter.query.toLowerCase())
	// 	);
	// }, [filter.query, sortedPosts]);

	return (
		<div className="App">
			<button
				onClick={fetchPosts}
				style={{ display: 'block', margin: '1rem auto' }}
			>
				Get Posts
			</button>
			<MyButton onClick={() => setModal(true)}>Create Post</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<Form create={createPost} />
			</MyModal>

			<hr style={{ margin: '1rem' }} />
			<PostFilter filter={filter} setFilter={setFilter} />

			{/* <Counter />
			<ClassCounter /> */}
			{postError ? <h1>Failed to Load Data {postError}</h1> : ''}
			{isPostLoading ? (
				<Loader />
			) : (
				<PostList
					title={'Programming'}
					postData={sortedAndSearchedPosts}
					remove={removePost}
				/>
			)}

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexWrap: 'wrap',
					justifyContent: 'center',
					margin: '1rem auto',
				}}
			>
				{pagesArray.map((el) => (
					<MyButton style={{ margin: '0 .2rem' }}>{el}</MyButton>
				))}
			</div>

			<PostList
				remove={removePost}
				title={'Planets'}
				postData={postData1}
			/>
		</div>
	);
}

export default App;

// 2.03
