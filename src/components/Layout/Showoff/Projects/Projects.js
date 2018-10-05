import React from 'react';

import Project from './Project/Project';

import classes from './Projects.css';

const projects = (props) => {
	const projectProperties = {
		name: props.language.project.names,
		desc: props.language.project.desc,
		tech: props.language.project.tech,
		status: props.language.project.status,
	};

	const header = props.language.header;
	const hrefList = ["https://peelar-elevelator.netlify.com/", "https://peelar-spotacritic.netlify.com/"];
	const techList = ["React", "React, Firebase, Axios, Osmosis, Node.js"];
	const elements = [];

	for (let i = 0; i < projectProperties.name.length; i++) {
		elements.push(<Project 
			label={projectProperties.name[i]} 
			desc={props.language.project.desc[i]} 
			link={hrefList[i]} 
			tech={techList[i]} 
			techLabel={projectProperties.tech} 
			key={projectProperties.name[i]}
			status={projectProperties.status[i]}
			/>);
	}	
	return (
		<section>
			<h2 className = {classes.header}>{header}</h2>
			<div className = {classes.projects}>
				{elements}
			</div>
		</section>
	);
};
export default projects;