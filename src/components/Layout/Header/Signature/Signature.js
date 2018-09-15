import React from 'react';

import classes from './Signature.css';

const signature = (props) => (
	<div className = {classes.signature}>
		<h1 className = {classes.signatureText}>{props.language}</h1>
	</div>
);
export default signature;