import React from 'react';

import Skill from './Skill/Skill';

import classes from './Skills.css';

const skills = (props) => {
	const skillsList = ["ES6+", "React", "jQuery", "PHP", "HTML + CSS", "Linux", "Bootstrap", "Git", "UXPin"];
	const advancementLevel = ["Advanced", "Advanced", "Pro", "Novice", "Advanced", "Novice", "Advanced", "Beginner", "Beginner"];

	const elements = [];

	for (let i = 0; i<skillsList.length; i++) {
		elements.push(<Skill onHover={props.onHover} onLeave={props.onLeave} label = {skillsList[i]} key = {skillsList[i]} advancementLevel={advancementLevel[i]}/>);
	}	

	return (
		<section className = {classes.skills}>
			{elements}
		</section>
	);
};
export default skills;