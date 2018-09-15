import React from 'react';

import classes from './Footer.css';

const footer = (props) => (
	<div className = {classes.footer}>
		<p className = {classes.paragraph}>2018, {props.language}</p>
	</div>
);
export default footer;