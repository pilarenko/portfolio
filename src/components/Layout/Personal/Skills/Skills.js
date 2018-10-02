import React from 'react';

import Skill from './Skill/Skill';

import classes from './Skills.css';

const skills = (props) => {
	const skillsList = ["ES6 + jQuery", "React", "PHP", "HTML + CSS", "Linux", "Git"];
	const skillLvl = ["3", "2", "1", "3", "1", "0"];
	const skillColors = ["#f0be61", "#f0a461", "#f09061", "#f06f61"];
	const elements = [];

	for (let i = 0; i < skillsList.length; i++) {
		elements.push(<Skill label = {skillsList[i]} key = {skillsList[i]} skillColor={skillColors[skillLvl[i]]} />);
	}	

	return (
		<section className = {classes.skills}>
			{elements}
		</section>
	);
};
export default skills;