import React, { useContext } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { AuthContext } from '../context';

function Login() {
	const { isAuth, setIsAuth } = useContext(AuthContext);

	const submit = (e) => {
		e.preventDefault();
		setIsAuth(!isAuth);
	};

	return (
		<div style={{ display: 'grid', placeItems: 'center', gap: '.5rem' }}>
			<h1>Login Page</h1>

			<form
				onSubmit={submit}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '1rem',
				}}
			>
				<MyInput type="text" placeholder="enter username" />
				<MyInput type="text" placeholder="enter password" />
				<MyButton>Login</MyButton>
			</form>
		</div>
	);
}

export default Login;
