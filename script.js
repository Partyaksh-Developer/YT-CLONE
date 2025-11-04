const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");

// Initialize dark Mode based on local storage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

// Toggle Dark When theme BNutton Is Clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});

// Toggle sidebar visibility when buttons are clicked
menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

// Toggele sidebar visibility whwn screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}
