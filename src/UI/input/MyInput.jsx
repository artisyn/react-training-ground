import React from 'react';
import classes from '../input/MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => (
	<input {...props} ref={ref} className={classes.myInp} type="text" />
));

export default MyInput;
