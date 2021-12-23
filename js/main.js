let __SEX__ = '';
let __AUTHOR__ = '';
let __INDEX__ = 0;
let __PATH__ = 0;

// Data
const data = {
	paths: [
		{
			pId: 0,
			title: 'Minha história inventada',
			questions: [
				{
					qId: 0,
					text: 'Qual é o seu nome?',
					setValue: (value) => {
						__AUTHOR__ = value;

						console.log(__AUTHOR__);
						return [];
					},
				},
				{
					qId: 1,
					text: 'Nesta história sobre você, quer que escrevamos?: ',
					options: [
						{ oId: 0, text: `Pronomes masculinos`, value: 'M' },
						{ oId: 1, text: `Pronomes femininos`, value: 'F' },
					],
					setValue: (value) => {
						__AUTHOR__ = value;
						return [];
					},
				},
				{
					qId: 2,
					text: 'Qual super-herói ou super-heroína você seria?',
					build: (value) => [
						`Se eu fosse ${sex ? 'um super-herói' : 'uma super-heroína'}`,
						`Seria ${sex ? 'o' : 'a'} ${value}`,
					],
				},
				{
					qId: 3,
					text: 'Qual vilão ou vilã você seria?',
					build: (value) => [
						`Mas se fosse ${sex ? 'vilã' : 'vilão'}`,
						`Seria tipo ${value}`,
					],
				},
				{
					qId: 4,
					text: 'Qual conto de fadas surge na sua mente agora?',
					build: (value) => [
						`Se eu vivesse um conto de fadas`,
						`Viveria a história de ${value}`,
					],
				},
				{
					qId: 5,
					text: 'Pense num monstro que você temia quando criança, qual seria?',
					build: (value) => [
						`E se tem um monstro que eu temi`,
						`Certamente, foi ${value}`,
					],
				},
				{
					qId: 6,
					text: 'E desenhado animado, cite um que lhe marcou',
					build: (value) => [`Cresci assistindo ${value}`],
				},
				{
					qId: 7,
					text: 'Uma novela ou série, lembre alguma que foi importante para você.',
					build: (value) => [`E chorei assistindo ${value}`],
				},
				{
					qId: 8,
					text: 'Cite um personagem fictício que, a seu ver, é muito estranho.',
					build: (value) => [`Porque quando sou ${value}`],
				},
				{
					qId: 9,
					text: 'Cite um personagem com o qual você aprendeu algo importante.',
					build: (value) => [`Sou tipo ${value}`],
				},
				{
					qId: 10,
					text: 'Se a história da sua vida fosse um filme, de que gênero seria? Exemplo: ação, drama, comédia, romance...',
					build: (value) => [
						`Sabe, minha história, seria um filme de ${value}`,
					],
				},
				{
					qId: 11,
					text: 'Agora pense bem. Não tenha pressa nessa pergunta. Se você fosse um personagem inventado, qual nome você teria? Crie um nome de mentira para você.',
					build: (value) => [
						` Quando nasci, deram-me um nome`,
						`Mas se eu pudesse inventar outro`,
						`Talvez o mais adequado seria ${value}`,
					],
				},
			],
		},
	],
};

// function setValue

// Slides Template
let slides = document.querySelector('.slides');
slides.innerHTML = Mustache.render(slideTemplate, data.paths[__PATH__]);

// // Verses template
// let verses = document.querySelector('.verses');
// verses.innerHTML = Mustache.render(verseTempalte, data);

// Slide actions
document.querySelectorAll('.slide').forEach((slide, index) => {
	let dot = document.createElement('span');
	dot.classList.add('dot');
	dot.addEventListener('click', (e) => showSlides(index));

	let slider = document.querySelector('.slide-selector');
	slider.append(dot);
});

// document.querySelectorAll('.verse').forEach((verse, index) => {
// 	verse.addEventListener('click', (e) => showSlides(index));
// });

document.querySelectorAll('input[name^="qt"]').forEach((input) => {
	input.addEventListener('change', (e) => {
		const [_, pId, qId] = input.name.split('-').map((i) => parseInt(i));
		let question = data.paths[pId].questions[qId];
		question.value = e.target.value;

		if (question.hasOwnProperty('setValue')) {
			question.setValue(question.value);
		}
	});
});

showSlides(__INDEX__);

function showSlides(n) {
	var slides = document.querySelectorAll('.slide');
	var dots = document.querySelectorAll('.dot');
	var verses = document.querySelectorAll('.verse');

	// Safety
	if (n >= slides.length) {
		n = 0;
	} else if (n < 0) {
		n = slides.length - 1;
	}

	slides.forEach((item) => {
		item.style.display = 'none';
	});

	dots.forEach((item) => {
		item.classList.remove('active');
	});

	// verses.forEach((item) => {
	// 	item.classList.remove('active');
	// });

	slides[n].style.display = 'block';
	dots[n].classList.add('active');
	// verses[n].classList.add('active');

	__INDEX__ = n;
}

function prevSlide() {
	showSlides(__INDEX__ - 1);
}
function nextSlide() {
	showSlides(__INDEX__ + 1);
}

function createQR() {
	let qr = new VanillaQR({
		url: 'https://vauxgomes.github.io/poemador/',
		size: 250,
	});

	qrCode = document.querySelector('.qrcode');
	qrCode.innerHTML = '';
	qrCode.append(qr.toImage('png'));
}
