import React from 'react';
import '../Components/Post.scss';

function Post({ data }) {
	return (
		<div className="post__container">
			<h1 className="post__title">
				{data?.title ? data.title : 'No title'}
			</h1>
			<p className="post__text">{data?.text ? data.text : 'No text'}</p>
			<button className="post__delete">Delete Post</button>
		</div>
	);
}

export default Post;
