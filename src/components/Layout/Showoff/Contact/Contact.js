import React from 'react';

import classes from './Contact.css';

const contact = (props) => (
	<div className = {classes.contact}>
		<h2 className = {classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do?</h2>
		<button className = {classes.email}>Email</button>
	</div>
);
export default contact;