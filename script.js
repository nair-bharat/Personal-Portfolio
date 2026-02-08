// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");

  const icon = document.querySelector(".theme-icon");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.innerHTML = '<i class="fas fa-sun"></i>';
    // icon.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    icon.innerHTML = '<i class="fas fa-moon"></i>';
    // icon.textContent = "🌙";
  }
}

function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("mobileNav").classList.remove("show");
}

// Load saved theme
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.querySelector(".theme-icon");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    icon.innerHTML = '<i class="fas fa-sun"></i>';
    // icon.textContent = "☀️";
  } else {
    icon.innerHTML = '<i class="fas fa-moon"></i>';
    // icon.textContent = "🌙";
  }

  AOS.init({ duration: 900, once: true });
};
