import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/Loader/Loader';

function PostPage() {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const params = useParams();
	const [fetchPostById, isLoading, error] = useFetching(async () => {
		const response = await PostService.getById(params.id);
		setPost(response.data);
	});

	const [fetchComments, isCommentsLoading, commentsError] = useFetching(
		async () => {
			const response = await PostService.getCommentsById(params.id);
			setComments(response.data);
		}
	);
	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

	console.log(params);

	return (
		<div style={{ display: 'grid', placeItems: 'center' }}>
			<h1>You opened a Post with id - {params.id}</h1>;
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{post.id} {post.title}
				</div>
			)}
			{isCommentsLoading ? (
				<Loader />
			) : (
				<div>
					{comments.map((el) => (
						<div>
							<span style={{ color: 'red' }}>{el.email}</span>{' '}
							<br /> {el.body}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default PostPage;
