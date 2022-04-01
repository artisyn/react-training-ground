import React from 'react';
import Post from '../Components/Post.jsx';

function PostList({ postData, title }) {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				{title ? title : 'no title'}
			</h1>
			{postData.map((post) => (
				<Post key={post.id} data={post} />
			))}
		</div>
	);
}

export default PostList;
