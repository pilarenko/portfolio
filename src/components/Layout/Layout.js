import React from 'react';

import Header from './Header/Header';
import Personal from './Personal/Personal';
import Showoff from './Showoff/Showoff';

import classes from './Layout.css';



const layout = (props) => (
	<div className = {classes.layout}>
		<Header /> 
		<Personal />
		<Showoff />
	</div>
);

export default layout;