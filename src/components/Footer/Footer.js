import React from 'react';

import classes from './Footer.css';

const footer = (props) => (
	<footer className = {classes.footer}>
		<p className = {classes.paragraph}>2018, {props.language}</p>
	</footer>
);
export default footer;