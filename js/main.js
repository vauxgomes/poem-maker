// Data
const data = {
	sections: [
		{
			qid: 1,
			header: 'Question 1',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
			options: [
				{ oid: 1, text: 'Option 1' },
				{ oid: 2, text: 'Option 2' },
				{ oid: 3, text: 'Option 3' },
				{ oid: 4, text: 'Option 4' },
			],
		},

		{
			qid: 2,
			header: 'Question 2',
			text: 'Accusamus nemo nam quaerat ab quibusdam eius, quidem.',
			options: [
				{ oid: 1, text: 'Option 1' },
				{ oid: 2, text: 'Option 2' },
				{ oid: 3, text: 'Option 3' },
				{ oid: 4, text: 'Option 4' },
			],
		},
	],
};

// Template
const slideTemplate = document.querySelector('#template').innerHTML;
let slides = document.querySelector('.slides');
slides.innerHTML = Mustache.render(slideTemplate, data);

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

	verses.forEach((item) => {
		item.classList.remove('active');
	});

	slides[n].style.display = 'block';
	dots[n].classList.add('active');
	verses[n].classList.add('active');
}
