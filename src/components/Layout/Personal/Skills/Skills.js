import React from 'react';

import Skill from './Skill/Skill';

import classes from './Skills.css';

const skills = (props) => {
	// const skillsList = ["ES6 + jQuery", "React", "PHP", "HTML + CSS", "Linux", "Git"];
	// const skillLvl = ["3", "2", "1", "3", "1", "0"];
	// const skillColors = ["#f0be61", "#f0a461", "#f09061", "#f06f61"];
	// const skillIcons = [<i className="fab fa-js"></i>, <i className="fab fa-react"></i>, <i className="fab fa-php"></i>, <i className="fab fa-html5"></i>, <i className="fab fa-linux"></i>, <i className="fab fa-git"></i>];
	// const skillText = ["Modern syntax and methods", "Super fast SPA", "REST integrations", "Accessible user friendly interfaces", "NPM, directory operations", "Init, Commit, Push & Repeat"];
	// const skillText = props.language;

	const skillsData = {
		list: ["ES6 + jQuery", "React", "PHP", "HTML + CSS", "Linux", "Git"],
		lvl: ["3", "2", "1", "3", "1", "0"],
		colors: ["#f0be61", "#f0a461", "#f09061", "#f06f61"],
		icons: [<i className="fab fa-js"></i>, <i className="fab fa-react"></i>, <i className="fab fa-php"></i>, <i className="fab fa-html5"></i>, <i className="fab fa-linux"></i>, <i className="fab fa-git"></i>],
		text: props.language,
	};

	const elements = [];

	for (let i = 0; i < skillsData.list.length; i++) {
		elements.push(<Skill label={skillsData.list[i]} key={skillsData.list[i]} skillColor={skillsData.colors[skillsData.lvl[i]]} text={skillsData.text[i]} icon={skillsData.icons[i]}/>);
	}	

	return (
		<section className = {classes.skills}>
			{elements}
		</section>
	);
};
export default skills;