import React from 'react';

import Avatar from './Avatar/Avatar';

import classes from './Profile.css';

const profile = (props) => {
	const paragraph = props.language[0];
	const lis = props.language[1];
	let elements = [];
	for (let i = 0; i < lis.length; i++) {
		elements.push(<li key = {i}>{lis[i]}</li>);
	}
	return (
		<section className = {classes.profile}>
			<div className = {classes.firstRow}>
				<Avatar />
				<p className = {classes.paragraph}>{paragraph}</p>
			</div>
			<div className = {classes.secondRow}>
				<ul className = {classes.list}>
					{elements}
				</ul>
			</div>
		</section>
	)
};
export default profile;