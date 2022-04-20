import './App.scss';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './Components/Navbar';
import WrongPage from './pages/WrongPage';
import AppRouter from './UI/AppRouter';
import { AuthContext } from './context';

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true);
		}
		setIsLoading(false);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading,
			}}
		>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;

// 2.54
