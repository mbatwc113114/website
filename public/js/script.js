const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
const body = document.body;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('light-mode', savedTheme === 'light');
updateModeIcon();

modeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const currentMode = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentMode);
    updateModeIcon();
});

function updateModeIcon() {
const navbarBrand = document.querySelector('.navbar-brand');
const projectTitles = document.querySelectorAll('.card-title');

if (body.classList.contains('light-mode')) {
modeIcon.classList.remove('fa-moon');
modeIcon.classList.add('fa-sun');
navbarBrand.style.color = "#333"; // Dark text for light mode
projectTitles.forEach(title => title.style.color = "#333"); // Dark mode title fix
} else {
modeIcon.classList.remove('fa-sun');
modeIcon.classList.add('fa-moon');
navbarBrand.style.color = "#e6f1ff"; // Light text for dark mode
projectTitles.forEach(title => title.style.color = "#e6f1ff"); // Light mode title fix
}
}
