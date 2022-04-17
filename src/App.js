import './App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
	return (
		<BrowserRouter>
			here
			<Route path={'/about'}>
				<About />
			</Route>
			<Route path="/posts">
				<Posts />
			</Route>
		</BrowserRouter>
	);
}

export default App;

// 2.16
