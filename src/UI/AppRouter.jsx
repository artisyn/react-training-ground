import React from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import WrongPage from '../pages/WrongPage';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import PostPage from '../pages/PostPage';

function AppRouter() {
	return (
		<Switch>
			<Route path={'/about'}>
				<About />
			</Route>
			<Route exact path="/posts">
				<Posts />
			</Route>
			<Route path={'/wrong'}>
				<WrongPage />
			</Route>
			<Route exact path={'/posts/:id'}>
				<PostPage />
			</Route>

			<Redirect to={'/posts'} />
		</Switch>
	);
}

export default AppRouter;
