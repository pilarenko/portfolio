import React from 'react';

import Avatar from './Avatar/Avatar';

import classes from './Profile.css';

const profile = (props) => (
	<div className = {classes.profile}>
		<div className = {classes.firstRow}>
			<Avatar />
			<p className = {classes.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		</div>
		<div className = {classes.secondRow}>
			<ul className = {classes.list}>
				<li>Jakieś</li>
				<li>Bzdurki</li>
				<li>Tutaj</li>
			</ul>
		</div>
	</div>
);
export default profile;