import React from 'react';

import Profile from './Profile/Profile';
import Skills from './Skills/Skills';

import classes from './Personal.css';

const personal = (props) => (
	<section className = {classes.personal}>
		<Profile language = {props.language.profile}/>
		<Skills onHover={props.onHover} onLeave={props.onLeave}/>
	</section>
);
export default personal;