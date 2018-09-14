import React from 'react';

import Signature from './Signature/Signature';
import Visual from './Visual/Visual';

import classes from './Header.css';

const header = (props) => (
	<div className = {classes.header}>
		<p>Header</p>
		<Signature />
		<Visual />
	</div>
);
export default header;