import React, { useContext } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../Components/Navbar.scss';
import { AuthContext } from '../context';

function Navbar() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	return (
		<div className="navbar">
			<Link to={'/about'} className="navbar__link">
				About
			</Link>

			<Link to={'/posts'} className="navbar__link">
				Posts
			</Link>

			{isAuth ? (
				<button
					onClick={() => {
						setIsAuth(false);
						localStorage.removeItem('auth');
					}}
				>
					Exit
				</button>
			) : (
				''
			)}
		</div>
	);
}

export default Navbar;
