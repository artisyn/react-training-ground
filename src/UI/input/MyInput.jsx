import React from 'react';
import classes from '../input/MyInput.module.css';

function MyInput(props) {
	return <input {...props} className={classes.myInp} type="text" />;
}

export default MyInput;
