import React from 'react';

import QA from './QA/QA';

import classes from './QAs.css';

const qas = (props) => (
	<div className = {classes.qas}>
		<p>QAs</p>
		<QA />
	</div>
);
export default qas;