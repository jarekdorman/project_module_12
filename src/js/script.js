/* global */
/* eslint no-undef: "error" */

// const asideWrapper = document.querySelector('.aside_links');

/* Hamburger Menu */

function toggleMenu() {
  document.querySelector('.aside').classList.toggle('show');
  console.log(toggleMenu);
}

document.querySelector('.hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  toggleMenu();
});
