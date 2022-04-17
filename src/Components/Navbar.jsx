import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../Components/Navbar.scss';
function Navbar() {
	return (
		<div className="navbar">
			<Link to={'/about'} className="navbar__link">
				About
			</Link>

			<Link to={'/posts'} className="navbar__link">
				Posts
			</Link>
		</div>
	);
}

export default Navbar;
