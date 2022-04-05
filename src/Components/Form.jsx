import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput.jsx';
import MyButton from '../UI/button/MyButton.jsx';
import '../Components/Form.scss';

function Form({ create }) {
	const [post, setPost] = useState({ title: '', text: '' });

	const addPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		// setPostData([...postData, { ...post, id: Date.now() }]); // creating object directly inside (instead of newPost)
		setPost({ title: '', text: '' });
	};

	return (
		<form className="form__container" action="">
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder="name"
			/>
			<MyInput
				type="text"
				placeholder="description"
				value={post.text}
				onChange={(e) => setPost({ ...post, text: e.target.value })}
			/>

			<MyButton onClick={addPost}>Create Post</MyButton>
		</form>
	);
}

export default Form;
