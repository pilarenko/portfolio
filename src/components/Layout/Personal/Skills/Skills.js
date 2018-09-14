import React from 'react';

import Skill from './Skill/Skill';

import classes from './Skills.css';

const skills = (props) => (
	<div className = {classes.skills}>
		<Skill />
	</div>
);
export default skills;