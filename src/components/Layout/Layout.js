import React from 'react';

import Header from './Header/Header';
import Personal from './Personal/Personal';
import Showoff from './Showoff/Showoff';

import classes from './Layout.css';



const layout = (props) => (
	<section className = {classes.layout}>
		<Header language = {props.language.header} /> 
		<Personal language = {props.language.personal} />
		<Showoff language = {props.language.showoff} />
	</section>
);

export default layout;