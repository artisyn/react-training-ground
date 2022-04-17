import React from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import WrongPage from '../pages/WrongPage';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

function AppRouter() {
	return (
		<Switch>
			<Route path={'/about'}>
				<About />
			</Route>
			<Route path="/posts">
				<Posts />
			</Route>
			<Route path={'/wrong'}>
				{' '}
				<WrongPage />{' '}
			</Route>

			<Redirect to={'/wrong'} />
		</Switch>
	);
}

export default AppRouter;
