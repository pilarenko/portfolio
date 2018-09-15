import React from 'react';

import QA from './QA/QA';

import classes from './QAs.css';

const qas = (props) => {
	const questionsList = ["Czy je Pan chleb?", "Czy lubi Pan twarożek?", "Jak się masz?"];
	const answersList = ["Tak, jadam.", "Uwielbiam twarożek.", "Mam."];
	const elements = [];

	for (let i = 0; i < questionsList.length; i++) {
		elements.push(<QA key = {questionsList[i]} question = {questionsList[i]} answer = {answersList[i]}/>);
	}

	return (
		<div className = {classes.qas}>
			{elements}
		</div>
	)
};
export default qas;