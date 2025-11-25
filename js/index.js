let name_input = document.querySelector('#name')
let email_input = document.querySelector('#email')
let message_input = document.querySelector('#message')
let submit_button_input = document.querySelector('#submit_btn')


let project_1 = document.querySelector('#one')
let project_2 = document.querySelector('#two')
let project_3 = document.querySelector('#three')
let project_4 = document.querySelector('#four')

submit_button_input.addEventListener("click", (event) => {
    event.preventDefault();
    let name_value = name_input.value;
    let email_value = email_input.value;
    let message_value = message_input.value;

    if (!name_value || !email_value || !message_value) {
        alert("All fields are required!");
        return;
    }
    save_to_localstorage(name_value, email_value, message_value)
    window.location.href = './pages/form-details.html'
})

project_1.addEventListener("click", () => {
    window.location.href = "https://github.com/samTime101/Magnet-Matic"
})
project_2.addEventListener("click", () => {
    window.location.href = "https://github.com/samTime101/Examify"
})

project_3.addEventListener("click", () => {
    window.location.href = "https://github.com/samTime101/game-of-life"

})

project_4.addEventListener("click", () => {
    window.location.href = "https://github.com/samTime101/RemoteSave"
})


document.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

function myFunction() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

const slides = document.querySelectorAll('.slider img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}
function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

const moveUpButton = document.getElementById("moveup");
moveUpButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

const navItems = document.querySelectorAll("nav ul li[data-target]");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


let date = new Date()
date.getFullYear()
document.querySelector('footer').textContent = `Samip Regmi ${date}`