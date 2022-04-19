import './App.scss';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './Components/Navbar';
import WrongPage from './pages/WrongPage';
import AppRouter from './UI/AppRouter';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;

// 2.33
