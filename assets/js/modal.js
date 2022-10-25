'use strict'

const btnModal = document.getElementById('contacts-all');
const openModal = document.querySelector('.modal');
const closeModal = document.getElementById('close');

btnModal.addEventListener('click', () => {
    openModal.classList.add('open');
});

closeModal.addEventListener('click', () => {
    openModal.classList.remove('open');
})
