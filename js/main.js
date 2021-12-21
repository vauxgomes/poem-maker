// Data
const data = {
	questions: [
		{
			qId: 1,
			header: 'Verso 1',
			text: 'Minha terra tem palmeiras, onde canta',
			options: [
				{ opId: 1, text: 'o sabiá', result: 'Teste' },
				{ opId: 2, text: 'a garça', result: 'Teste' },
				{ opId: 3, text: 'o lobo', result: 'Teste' },
				{ opId: 4, text: 'o papagaio', result: 'Teste' },
			],
		},

		{
			qId: 2,
			header: 'Verso 2',
			text: 'Nosso céu tem mais estrelas nossas várzeas têm mais',
			options: [
				{ opId: 1, text: 'chão', result: 'Teste' },
				{ opId: 2, text: 'flores', result: 'Teste' },
				{ opId: 3, text: 'abelhas', result: 'Teste' },
				{ opId: 4, text: 'palmeiras', result: 'Teste' },
			],
		},

		{
			qId: 3,
			header: 'Verso 3',
			text: 'Em cismar, sozinho, à noite, mais prazer encontro eu',
			options: [
				{ opId: 1, text: 'lá', result: 'Teste' },
				{ opId: 2, text: 'cá', result: 'Teste' },
				{ opId: 3, text: 'aqui', result: 'Teste' },
				{ opId: 4, text: 'acolá', result: 'Teste' },
			],
		},

		{
			qId: 4,
			header: 'Verso 4',
			text: 'Minha terra tem primores, que tais não encontro eu ',
			options: [
				{ opId: 1, text: 'lá', result: 'Teste' },
				{ opId: 2, text: 'cá', result: 'Teste' },
				{ opId: 3, text: 'aqui', result: 'Teste' },
				{ opId: 4, text: 'acolá', result: 'Teste' },
			],
		},

		{
			qId: 5,
			header: 'Verso 5',
			text: 'Não permita Deus que eu morra, sem que eu volte para ',
			options: [
				{ opId: 1, text: 'lá', result: 'Teste' },
				{ opId: 2, text: 'cá', result: 'Teste' },
				{ opId: 3, text: 'aqui', result: 'Teste' },
				{ opId: 4, text: 'acolá', result: 'Teste' },
			],
		},
	],

	verses: [
		[
			'Minha terra tem palmeiras,',
			'Onde canta o Sabiá;',
			'As aves, que aqui gorjeiam,',
			'Não gorjeiam como lá.',
		],
		[
			'Nosso céu tem mais estrelas,',
			'Nossas várzeas têm mais flores,',
			'Nossos bosques têm mais vida,',
			'Nossa vida mais amores.',
		],
		[
			'Em cismar, sozinho, à noite,',
			'Mais prazer encontro eu lá;',
			'Minha terra tem palmeiras,',
			'Onde canta o Sabiá.',
		],
		[
			'Minha terra tem primores,',
			'Que tais não encontro eu cá;',
			'Em cismar — sozinho, à noite —',
			'Mais prazer encontro eu lá;',
			'Minha terra tem palmeiras,',
			'Onde canta o Sabiá.',
		],
		[
			'Não permita Deus que eu morra,',
			'Sem que eu volte para lá;',
			'Sem que desfrute os primores',
			'Que não encontro por cá;',
			"Sem qu'inda aviste as palmeiras,",
			'Onde canta o Sabiá.',
		],
	],

	getVerse: (i) => {
		return verses[i].split('\n');
	},
};

// Shuffle options
data.questions.forEach((question) => {
	question.options = shuffle(question.options);
});

// Slides Template
let slides = document.querySelector('.slides');
slides.innerHTML = Mustache.render(slideTemplate, data);

// Verses template
let verses = document.querySelector('.verses');
verses.innerHTML = Mustache.render(verseTempalte, data);

// Slide actions
let slider = document.querySelector('.slider');
document.querySelectorAll('.slide').forEach((slide, index) => {
	let dot = document.createElement('span');
	dot.classList.add('dot');
	dot.addEventListener('click', (e) => showSlides(index));

	slider.append(dot);
});

document.querySelectorAll('.verse').forEach((verse, index) => {
	verse.addEventListener('click', (e) => showSlides(index));
});

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
	var slides = document.querySelectorAll('.slide');
	var dots = document.querySelectorAll('.dot');
	var verses = document.querySelectorAll('.verse');

	// Safety
	if (n >= verses.length) {
		n = 0;
	} else if (n < 0) {
		n = verses.length - 1;
	}

	slides.forEach((item) => {
		item.style.display = 'none';
	});

	dots.forEach((item) => {
		item.classList.remove('active');
	});

	verses.forEach((item) => {
		item.classList.remove('active');
	});

	slides[n].style.display = 'block';
	dots[n].classList.add('active');
	verses[n].classList.add('active');

	slideIndex = n;
}

function prevSlide() {
	showSlides(slideIndex - 1);
}
function nextSlide() {
	showSlides(slideIndex + 1);
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
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
