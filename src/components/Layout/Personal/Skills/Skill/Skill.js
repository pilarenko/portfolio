import React from 'react';

import classes from './Skill.css';

const skill = (props) => {
	return (
		<div className = {classes.skill} onMouseEnter={props.onHover} onMouseLeave={props.onLeave} name = {props.label}>
			<p>{props.label}</p>
			<p id = {props.label} className = {classes.advancement}>{props.advancementLevel}</p>
		</div>
	)
};
export default skill;