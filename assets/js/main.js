'use strict';
/* Style element Active */
const menuActive = document.querySelectorAll('navbar-item');
const navbarLink = document.getElementsByClassName('navbar-link');
for (var i = 0; i < navbarLink.length; i++) {
  navbarLink[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    this.className += ' active';
  });
}
