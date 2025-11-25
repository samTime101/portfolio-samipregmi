window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
    document.querySelector('#name').textContent = `Name: ${localStorage.getItem("name")}`;
    document.querySelector('#email').textContent = `Email: ${localStorage.getItem("email")}`;
    document.querySelector('#message').textContent = `Message: ${localStorage.getItem("message")}`;
    let date = new Date()
    date.getFullYear()
    document.querySelector('footer').textContent = `Samip Regmi ${date}`
});

const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
