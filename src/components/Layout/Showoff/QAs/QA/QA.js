import React from 'react';

import classes from './QA.css';

const qa = (props) => (
	<div className = {classes.qa}>
		<p className = {classes.question}><b>Q: {props.question}</b></p>
		<p className = {classes.answer}>A: {props.answer}</p>
	</div>
);
export default qa;