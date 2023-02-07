window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".right-section"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("right-section_active");
  });
});
