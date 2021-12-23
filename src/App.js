import { useState } from 'react';
import uuid from 'react-uuid';

import Builder from './components/Builder';
import { StoryContext } from './Context/StoryContext';

import './App.css';
import Poem from './components/Poem';

function App() {
	const [name, setName] = useState('');
	const [sex, setSex] = useState('M');

	const [storyIndex, setStoryIndex] = useState(0);
	const [stories, setStories] = useState([
		{
			id: uuid(),
			title: 'Minha história inventada',
			questions: [
				{
					id: uuid(),
					text: 'Qual é o seu nome?',
					value: '',
					onChange: setName,
				},
				{
					id: uuid(),
					text: 'Nesta história sobre você prefere?',
					value: true,
					options: [
						{ id: uuid(), text: `Pronomes masculinos`, value: 'M' },
						{ id: uuid(), text: `Pronomes femininos`, value: 'F' },
					],
					onChange: setSex,
				},
				{
					id: uuid(),
					text: 'Qual super-herói ou super-heroína você seria?',
					value: '',
					build: (value, sex) => [
						`Se eu fosse ${
							sex === 'M' ? 'um super-herói' : 'uma super-heroína'
						}`,
						`Seria ${sex === 'M' ? 'o' : 'a'} ${value}`,
					],
				},
				{
					id: uuid(),
					text: 'Qual vilão ou vilã você seria?',
					value: '',
					build: (value, sex) => [
						`Mas se fosse ${sex === 'M' ? 'vilão' : 'vilã'}`,
						`Seria tipo ${value}`,
					],
					breakLine: true,
				},
				{
					id: uuid(),
					text: 'Qual conto de fadas surge na sua mente agora?',
					value: '',
					build: (value) => [
						`Se eu vivesse um conto de fadas`,
						`Viveria a história de ${value}`,
					],
				},
				{
					id: uuid(),
					text: 'Pense num monstro que você temia quando criança, qual seria?',
					value: '',
					build: (value) => [
						`E se tem um monstro que eu temi`,
						`Certamente, foi ${value}`,
					],
					breakLine: true,
				},
				{
					id: uuid(),
					text: 'E desenhado animado, cite um que lhe marcou',
					value: '',
					build: (value) => [`Cresci assistindo ${value}`],
				},
				{
					id: uuid(),
					text: 'Uma novela ou série, lembre alguma que foi importante para você.',
					value: '',
					build: (value) => [`E chorei assistindo ${value}`],
				},
				{
					id: uuid(),
					text: 'Cite um personagem fictício que, a seu ver, é muito estranho.',
					value: '',
					build: (value) => [`Porque quando sou ${value}`],
				},
				{
					id: uuid(),
					text: 'Cite um personagem com o qual você aprendeu algo importante.',
					value: '',
					build: (value) => [`Sou tipo ${value}`],
					breakLine: true,
				},
				{
					id: uuid(),
					text: 'Se a história da sua vida fosse um filme, de que gênero seria? Exemplo: ação, drama, comédia, romance...',
					value: '',
					build: (value) => [
						`Sabe, minha história, seria um filme de ${value}`,
					],
				},
				{
					id: uuid(),
					text: 'Agora pense bem. Não tenha pressa nessa pergunta. Se você fosse um personagem inventado, qual nome você teria? Crie um nome de mentira para você.',
					value: '',
					build: (value) => [
						` Quando nasci, deram-me um nome`,
						`Mas se eu pudesse inventar outro`,
						`Talvez o mais adequado seria ${value}`,
					],
				},
			],
		},
	]);

	function handleChange(questionId, value) {
		let stories_ = [...stories];

		let questionIndex = stories_[storyIndex].questions.findIndex(
			(question) => question.id === questionId
		);

		let question = stories_[storyIndex].questions[questionIndex];
		question.value = value;

		if (question.hasOwnProperty('onChange')) {
			question.onChange(value);
		}

		setStories(stories_);
	}

	return (
		<div className="App">
			{/* HEADER */}
			<header className="header noprint">
				<span className="material-icons"> history_edu </span>
				<span>Poemador</span>
			</header>

			<StoryContext.Provider value={{ handleChange }}>
				<div className="content">
					{/* BUILDER */}
					<Builder story={stories[storyIndex]} />
					<Poem story={stories[storyIndex]} sex={sex} name={name} />
				</div>
			</StoryContext.Provider>
		</div>
	);
}

export default App;
