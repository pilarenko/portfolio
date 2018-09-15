import React from 'react';

import classes from './Navbar.css';

const navbar = (props) => {
	const icon = (props.icon) ? <img className={classes.flag} src="https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg" alt="Poland Flag" /> : <img className={classes.flag} src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" alt="United Kingdom Flag" />;

	return (
		<ul className = {classes.navbar}>
			<li className = {classes.language} onClick = {props.languageClick}>{icon}<a>{props.language}</a></li>
			<li id = "github">
				<a href="https://github.com/pilarenko"><i className="fab fa-github"></i></a>
			</li>
			<li id = "linkedin">
				<a href="https://www.linkedin.com/in/adrian-pilarczyk-b37695167/"><i className="fab fa-linkedin-in"></i></a>
			</li>
		</ul>
	)
};
export default navbar;