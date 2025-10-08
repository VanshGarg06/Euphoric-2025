// DARK MODE TOGGLE
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Optional: Change the icon based on theme
  const img = this.querySelector("img");
  if (document.body.classList.contains("dark-mode")) {
    img.style.filter = "invert(100%)";
  } else {
    img.style.filter = "invert(0%)";
  }
});

// HAMBURGER MENU TOGGLE
const hamburger = document.getElementById("menu-trigger");
const navLinks = document.querySelector(".navbar-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
