window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#name').textContent = `Name: ${localStorage.getItem("name")}`;
    document.querySelector('#email').textContent = `Email: ${localStorage.getItem("email")}`;
    document.querySelector('#message').textContent = `Message: ${localStorage.getItem("message")}`;

    if(localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
});

const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});
