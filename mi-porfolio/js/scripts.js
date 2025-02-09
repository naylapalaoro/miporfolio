const toggleTheme = document.getElementById("toggle-theme");
const toggleThemeIcon = document.getElementById("toggle-theme-icon");
const toggleThemeText = document.getElementById("toggle-theme-text");
const buton = document.getElementById("button-my-proyects");

// Cambiar tema (oscuro/claro)
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("ligth");
  if (toggleThemeIcon.src.includes("sun.svg")) {
    toggleThemeIcon.src = "assets/icons/moon.svg";
    toggleThemeText.textContent = "Modo oscuro";
  } else {
    toggleThemeIcon.src = "assets/icons/sun.svg";
    toggleThemeText.textContent = "Modo claro";
  }
});
