'use strict';
const menuIcon = document.getElementById('menu');
const menuIconClose = document.querySelector('.menu-icon');
const menuListItem = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', () => {
  if (menuListItem.classList.contains('show')) {
    menuListItem.classList.remove('show');
    menuIconClose.classList.remove('menu-icon-close');
  } else {
    menuListItem.classList.add('show');
    menuIconClose.classList.add('menu-icon-close');
  }
});
