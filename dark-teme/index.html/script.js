const changeThemeLabel = document.querySelector("label[for='change-theme']");
const changeThemeCheckbox = document.getElementById("change-theme");

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

// Load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark");

    if (darkMode === "true") {
        toggleDarkMode();
        changeThemeCheckbox.checked = true;
    }
}

loadTheme();

changeThemeLabel.addEventListener("click", function () {
    toggleDarkMode();

    // Save or remove dark mode from localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", true);
    } else {
        localStorage.removeItem("dark");
    }
});
