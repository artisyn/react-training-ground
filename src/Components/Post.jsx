import React from 'react';
import '../Components/Post.scss';

function Post({ data, remove }) {
	return (
		<div className="post__container">
			<h1 className="post__title">
				{data?.title ? data.title : 'No title'}
			</h1>
			<p className="post__text">{data?.body ? data.body : 'No text'}</p>
			<button onClick={() => remove(data)} className="post__delete">
				Delete Post
			</button>
		</div>
	);
}

export default Post;
