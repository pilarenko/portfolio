import React from 'react';

import Skill from './Skill/Skill';

import classes from './Skills.css';

const skills = (props) => {
	const skillsList = ["ES6 + jQuery", "React", "PHP", "HTML + CSS", "Linux", "Git"];
	const skillLvl = ["3", "2", "1", "3", "1", "0"];
	const skillColors = ["#f0be61", "#f0a461", "#f09061", "#f06f61"];
	const skillIcons = [<i className="fab fa-js"></i>, <i className="fab fa-react"></i>, <i className="fab fa-php"></i>, <i className="fab fa-html5"></i>, <i className="fab fa-linux"></i>, <i className="fab fa-git"></i>];
	const skillText = ["Modern syntax and methods", "Super fast SPA", "REST integrations", "With accessibility in mind", "NPM, directory operations", "Init, Commit, Push & Repeat"];
	const elements = [];

	for (let i = 0; i < skillsList.length; i++) {
		elements.push(<Skill label={skillsList[i]} key={skillsList[i]} skillColor={skillColors[skillLvl[i]]} text={skillText[i]} icon={skillIcons[i]}/>);
	}	

	return (
		<section className = {classes.skills}>
			{elements}
		</section>
	);
};
export default skills;