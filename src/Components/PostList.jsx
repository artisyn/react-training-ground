import React from 'react';
import Post from '../Components/Post.jsx';
import '../Components/PostList.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PostList({ postData, title, remove }) {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				{title ? title : 'no title'}
			</h1>

			<TransitionGroup>
				{postData.length ? (
					postData.map((post) => (
						<CSSTransition
							key={post.id}
							classNames="post"
							timeout={500}
						>
							<Post remove={remove} data={post} />
						</CSSTransition>
					))
				) : (
					<h2 style={{ textAlign: 'center' }}>No Posts</h2>
				)}
			</TransitionGroup>
		</div>
	);
}

export default PostList;
