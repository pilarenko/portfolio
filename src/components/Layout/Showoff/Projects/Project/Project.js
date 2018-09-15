import React from 'react';

import classes from './Project.css';

const project = (props) => (
	<a href = {props.link} target="_blank" rel="noopener noreferrer">
		<div className = {classes.project}>
			<img className = {classes.preview} src = {props.src} alt = {props.label}/>
			<p className = {classes.paragraph}>{props.label}</p>
		</div>
	</a>
);
export default project;