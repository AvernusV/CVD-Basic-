const toggleMenu = document.querySelector(".toggle__menu");
const contactheaderNav = document.querySelector(".contactheader__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  contactheaderNav.classList.toggle("open");
});