import React from 'react';

import Profile from './Profile/Profile';
import Skills from './Skills/Skills';

import classes from './Personal.css';

const personal = (props) => (
	<section className = {classes.personal}>
		<Profile language = {props.language.profile} />
		<Skills language = {props.language.skills}/>
	</section>
);
export default personal;