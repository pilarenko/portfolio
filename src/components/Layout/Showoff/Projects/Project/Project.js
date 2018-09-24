import React from 'react';

import classes from './Project.css';

const project = (props) => (
	<a href={props.link} target="_blank" rel="noopener noreferrer">
		<div className={classes.project}>
			<h2 className={classes.label}>{props.label}</h2>
			<p className={classes.status}>({props.status})</p>
			<div className={classes.line} />
			<p className={classes.paragraph}>{props.desc}</p>
			<h3 className={classes.techLabel}>{props.techLabel}</h3>
			<p className={classes.tech}>{props.tech}</p>
		</div>
	</a>
);
export default project;