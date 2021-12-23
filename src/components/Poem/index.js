import React, { useState } from 'react';

import './styles.css';

export default function Poem({ story, sex, name }) {
	const [print, setPrint] = useState(false);
	const [verses, setVerses] = useState([]);

	function handleBuild() {
		const questions = story.questions;
		const verses = [];

		if (questions.some((question) => question.value === '')) {
			setPrint(false);
			return;
		} else {
			setPrint(true);
		}

		questions.forEach((question) => {
			if (question.hasOwnProperty('build')) {
				verses.push(...question?.build(question.value, sex));

				if (question.breakLine) {
					verses.push('');
				}
			}
		});

		setVerses(verses);
	}

	return (
		<>
			<button onClick={handleBuild}>Gerar</button>
			{print ? (
				<div className="poem">
					<h3>{story.title}</h3>

					{verses.map((verse, index) => (
						<span className="verse" key={index}>
							{verse}
						</span>
					))}

					<h4>{name}</h4>
				</div>
			) : (
				''
			)}
		</>
	);
}
