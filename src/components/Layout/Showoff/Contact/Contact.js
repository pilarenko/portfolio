import React from 'react';

import classes from './Contact.css';

const contact = (props) => {
	const paragraph = props.language[0];
	const emailText = props.language[1];
	const buttonClasses = ["far fa-envelope", classes.buttonIcon].join(" ");
	return (
		<div className = {classes.contact}>
			<h2 className = {classes.paragraph}>{paragraph}</h2>
			<button className = {classes.email}><i className={buttonClasses}></i>{emailText}</button>
		</div>
	)
};
export default contact;