import React from 'react';

import classes from './Skill.css';


const skill = (props) => {
	const skillColor = {
		"backgroundColor": props.skillColor,
	};

	return (
		<div>
			<div className={classes.skill} name={props.label} style={skillColor}>
				<span className={classes.gears}>{props.icon}</span>
				<p className = {classes.text}>{props.text}</p>
			</div>
			<p className = {classes.heading}>{props.label}</p>
		</div>

	)
};
export default skill;