import React from 'react';

import Project from './Project/Project';

import classes from './Projects.css';

const projects = (props) => {
	const projectsList = ["Elevelator", "Form", "Used car purchase analysis"];
	const elements = [];

	for (let i = 0; i < projectsList.length; i++) {
		elements.push(<Project label = {projectsList[i]} key = {projectsList[i]}/>);
	}	
	return (
		<div className = {classes.projects}>
			{elements}
		</div>
	);
};
export default projects;