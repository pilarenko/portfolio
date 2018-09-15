import React from 'react';

import Skill from './Skill/Skill';

import classes from './Skills.css';

const skills = (props) => {
	const skillsList = ["JS", "React", "jQuery", "PHP", "HTML", "CSS", "Bootstrap", "Git", "UXPin"];
	const elements = [];

	for (let i = 0; i<skillsList.length; i++) {
		elements.push(<Skill label = {skillsList[i]} key = {skillsList[i]}/>);
	}	

	return (
		<div className = {classes.skills}>
			{elements}
		</div>
	);
};
export default skills;