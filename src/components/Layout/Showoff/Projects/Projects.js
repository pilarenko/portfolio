import React from 'react';

import Project from './Project/Project';

import classes from './Projects.css';

const projects = (props) => {
	const projectsList = props.language.project;
	const header = props.language.header;
	const hrefList = ["https://peelar-elevelator.netlify.com/", "peelar-form.netlify.com/"];
	const srcList = ["https://res.cloudinary.com/dbqh97mz3/image/upload/v1537033990/elevelator.jpg", "https://res.cloudinary.com/dbqh97mz3/image/upload/v1537033989/form.jpg"];
	const elements = [];

	for (let i = 0; i < projectsList.length; i++) {
		elements.push(<Project src = {srcList[i]} label = {projectsList[i]} link = {hrefList[i]} key = {projectsList[i]}/>);
	}	
	return (
		<div>
			<h2 className = {classes.header}>{header}</h2>
			<div className = {classes.projects}>
				{elements}
			</div>
		</div>
	);
};
export default projects;