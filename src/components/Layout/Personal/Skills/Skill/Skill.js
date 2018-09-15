import React from 'react';

import classes from './Skill.css';

const skill = (props) => (
	<div className = {classes.skill}>
		<p>{props.label}</p>
	</div>
);
export default skill;