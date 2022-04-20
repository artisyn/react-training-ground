import React, { useContext } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { routes } from '../router/route';
import { privateRoutes, publicRoutes } from '../router/route';
import { AuthContext } from '../context';

function AppRouter() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	return isAuth ? (
		<Switch>
			{privateRoutes.map((el) => (
				<Route
					component={el.component}
					path={el.path}
					exact={el.exact}
					key={el.path}
				/>
			))}

			<Redirect to={'/posts'} />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map((el) => (
				<Route
					component={el.component}
					path={el.path}
					exact={el.exact}
					key={el.path}
				/>
			))}
			<Redirect to={'/login'} />
		</Switch>
	);
}

export default AppRouter;
