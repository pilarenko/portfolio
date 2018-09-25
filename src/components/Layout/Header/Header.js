import React from 'react';

import Signature from './Signature/Signature';
import Visual from './Visual/Visual';

import classes from './Header.css';

const header = (props) => (
	<header className = {classes.header}>
		<Signature language = {props.language.signature}/>
		<Visual />
	</header>
);
export default header;