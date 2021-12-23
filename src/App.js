import { useState } from 'react';
import Builder from './components/Builder';

import './App.css';

function App() {
	const [name, setName] = useState('M');
	const [gender, setGender] = useState('M');

	const [stories, setStories] = useState([
		{
			id: 1,
			title: 'Minha história inventada',
			questions: [
				{
					id: 0,
					text: 'Qual é o seu nome?',
					onchange: (value) => {
						setName(value);
						console.log(value);
					},
				},
				{
					id: 1,
					text: 'Nesta história sobre você prefere?',
					options: [
						{ id: 0, text: `Pronomes masculinos`, value: 'M' },
						{ id: 1, text: `Pronomes femininos`, value: 'F' },
					],
					onchange: (value) => setGender(value),
				},
				{
					id: 2,
					text: 'Qual super-herói ou super-heroína você seria?',
					build: (value) => [
						`Se eu fosse ${gender ? 'um super-herói' : 'uma super-heroína'}`,
						`Seria ${gender ? 'o' : 'a'} ${value}`,
					],
				},
				{
					id: 3,
					text: 'Qual vilão ou vilã você seria?',
					build: (value, gender) => [
						`Mas se fosse ${gender ? 'vilã' : 'vilão'}`,
						`Seria tipo ${value}`,
					],
				},
				{
					id: 4,
					text: 'Qual conto de fadas surge na sua mente agora?',
					build: (value) => [
						`Se eu vivesse um conto de fadas`,
						`Viveria a história de ${value}`,
					],
				},
				{
					id: 5,
					text: 'Pense num monstro que você temia quando criança, qual seria?',
					build: (value) => [
						`E se tem um monstro que eu temi`,
						`Certamente, foi ${value}`,
					],
				},
				{
					id: 6,
					text: 'E desenhado animado, cite um que lhe marcou',
					build: (value) => [`Cresci assistindo ${value}`],
				},
				{
					id: 7,
					text: 'Uma novela ou série, lembre alguma que foi importante para você.',
					build: (value) => [`E chorei assistindo ${value}`],
				},
				{
					id: 8,
					text: 'Cite um personagem fictício que, a seu ver, é muito estranho.',
					build: (value) => [`Porque quando sou ${value}`],
				},
				{
					id: 9,
					text: 'Cite um personagem com o qual você aprendeu algo importante.',
					build: (value) => [`Sou tipo ${value}`],
				},
				{
					id: 10,
					text: 'Se a história da sua vida fosse um filme, de que gênero seria? Exemplo: ação, drama, comédia, romance...',
					build: (value) => [
						`Sabe, minha história, seria um filme de ${value}`,
					],
				},
				{
					id: 11,
					text: 'Agora pense bem. Não tenha pressa nessa pergunta. Se você fosse um personagem inventado, qual nome você teria? Crie um nome de mentira para você.',
					build: (value) => [
						` Quando nasci, deram-me um nome`,
						`Mas se eu pudesse inventar outro`,
						`Talvez o mais adequado seria ${value}`,
					],
				},
			],
		},
	]);

	function handleChange(storyIndex, questionIndex, value) {
		let stories_ = [...stories];
		stories_[storyIndex].questions[questionIndex].value = value;
		setStories(stories_);
	}

	return (
		<div className="App">
			{/* HEADER */}
			<header className="header noprint">
				<span className="material-icons"> history_edu </span>
				<span>Poemador</span>
			</header>

			{/* BUILDER */}
			<Builder story={stories[0]} handleChange={handleChange} />
		</div>
	);
}

export default App;
