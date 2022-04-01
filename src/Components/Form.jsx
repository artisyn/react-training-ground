import React from 'react';
import MyInput from '../UI/input/MyInput.jsx';
import MyButton from '../UI/button/MyButton.jsx';
import '../Components/Form.scss';

function Form() {
	return (
		<form className="form__container" action="">
			<MyInput type="text" placeholder="name" />
			<MyInput type="text" placeholder="description" />
			<MyButton disabled>Create Post</MyButton>
		</form>
	);
}

export default Form;
