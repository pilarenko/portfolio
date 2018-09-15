import React from 'react';

import classes from './Navbar.css';

const navbar = (props) => (
		<ul className = {classes.navbar}>
			<li className = {classes.language}><a>Language</a></li>
			<li id = "github">
				<a href="https://github.com/pilarenko"><i className="fab fa-github"></i></a>
			</li>
			<li id = "linkedin">
				<a href="https://www.linkedin.com/in/adrian-pilarczyk-b37695167/"><i className="fab fa-linkedin-in"></i></a>
			</li>
		</ul>
);
export default navbar;