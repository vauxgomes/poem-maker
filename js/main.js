// Data
const data = {
    sections: [
        {
            qId: 1,
            header: "Question 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            options: [
                { opId: 1, text: "Option 1.1", result: "Teste" },
                { opId: 2, text: "Option 1.2", result: "Teste" },
                { opId: 3, text: "Option 1.3", result: "Teste" },
                { opId: 4, text: "Option 1.4", result: "Teste" },
            ],
        },

        {
            qId: 2,
            header: "Question 2",
            text: "Accusamus nemo nam quaerat ab quibusdam eius, quidem.",
            options: [
                { opId: 1, text: "Option 2.1" },
                { opId: 2, text: "Option 2.2" },
                { opId: 3, text: "Option 2.3" },
                { opId: 4, text: "Option 2.4" },
            ],
        },

        {
            qId: 3,
            header: "Question 2",
            text: "Accusamus nemo nam quaerat ab quibusdam eius, quidem.",
            options: [
                { opId: 1, text: "Option 2.1" },
                { opId: 2, text: "Option 2.2" },
                { opId: 3, text: "Option 2.3" },
                { opId: 4, text: "Option 2.4" },
            ],
        },

        {
            qId: 4,
            header: "Question 2",
            text: "Accusamus nemo nam quaerat ab quibusdam eius, quidem.",
            options: [
                { opId: 1, text: "Option 2.1" },
                { opId: 2, text: "Option 2.2" },
                { opId: 3, text: "Option 2.3" },
                { opId: 4, text: "Option 2.4" },
            ],
        },
    ],
};

// Template
let slides = document.querySelector(".slides");
slides.innerHTML = Mustache.render(slideTemplate, data);

// Slide actions
let slider = document.querySelector(".slider");
document.querySelectorAll(".slide").forEach((slide, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", (e) => showSlides(index));

    slider.append(dot);
});

document.querySelectorAll(".verse").forEach((verse, index) => {
    verse.addEventListener("click", (e) => showSlides(index));
});

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    var verses = document.querySelectorAll(".verse");

    // Safety
    if (n >= slides.length) {
        n = 0;
    } else if (n < 0) {
        n = slides.length - 1;
    }

    slides.forEach((item) => {
        item.style.display = "none";
    });

    dots.forEach((item) => {
        item.classList.remove("active");
    });

    verses.forEach((item) => {
        item.classList.remove("active");
    });

    slides[n].style.display = "block";
    dots[n].classList.add("active");
    verses[n].classList.add("active");

    slideIndex = n;
}

function prevSlide() {
    showSlides(slideIndex - 1);
}
function nextSlide() {
    showSlides(slideIndex + 1);
}
