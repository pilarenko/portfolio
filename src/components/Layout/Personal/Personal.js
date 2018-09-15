import React from 'react';

import Profile from './Profile/Profile';
import Skills from './Skills/Skills';

import classes from './Personal.css';

const personal = (props) => (
	<div className = {classes.personal}>
		<Profile />
		<Skills />
	</div>
);
export default personal;