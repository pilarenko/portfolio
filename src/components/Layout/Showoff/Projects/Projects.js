import React from 'react';

import Project from './Project/Project';

import classes from './Projects.css';

const projects = (props) => (
	<div className = {classes.projects}>
		<p>Projects</p>
		<Project />
	</div>
);
export default projects;