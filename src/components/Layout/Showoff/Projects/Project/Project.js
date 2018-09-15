import React from 'react';

import classes from './Project.css';

const project = (props) => (
	<div className = {classes.project}>
		<p>{props.label}</p>
	</div>
);
export default project;