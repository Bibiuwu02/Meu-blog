const toggleButton = document.getElementById('toggle-button');

const isDarkMode = localStorage.getItem('darkMode') === 'true';

function applyDarkMode() {
    document.body.classList.add('dark-mode');
}
function removeDarkMode() {
    document.body.classList.remove('dark-mode');
}
function toggleMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        removeDarkMode();
        localStorage.setItem('darkMode', false);
    } else {
        applyDarkMode();
        localStorage.setItem('darkMode', true);
    }
}
toggleButton.addEventListener('click', toggleMode);
if (isDarkMode) {
    applyDarkMode();
}
