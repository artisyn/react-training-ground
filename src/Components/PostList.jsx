import React from 'react';
import Post from '../Components/Post.jsx';

function PostList({ postData, title, remove }) {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				{title ? title : 'no title'}
			</h1>
			{postData.length ? (
				postData.map((post) => (
					<Post remove={remove} key={post.id} data={post} />
				))
			) : (
				<h2 style={{ textAlign: 'center' }}>No Posts</h2>
			)}
		</div>
	);
}

export default PostList;
