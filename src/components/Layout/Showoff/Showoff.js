import React from 'react';

import Projects from './Projects/Projects';
import QAs from './QAs/QAs';
import Contact from './Contact/Contact';

import classes from './Showoff.css';

const showoff = (props) => (
	<div className = {classes.showoff}>
		<Projects />
		<QAs />
		<Contact />
	</div>
);
export default showoff;