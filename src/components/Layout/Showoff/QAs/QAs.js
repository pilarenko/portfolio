import React from 'react';

import QA from './QA/QA';

import classes from './QAs.css';

const qas = (props) => {
	const questionsList = props.language.q;
	const answersList = props.language.a;
	const elements = [];

	for (let i = 0; i < questionsList.length; i++) {
		elements.push(<QA key = {questionsList[i]} question = {questionsList[i]} answer = {answersList[i]}/>);
	}

	return (
		<section className = {classes.qas}>
			{elements}
		</section>
	)
};
export default qas;