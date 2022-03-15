const burger = document.querySelector('.header__btn');
const menu = document.querySelector('.header__menu');
const crtn = document.querySelector('.header__shtor');
const close = document.querySelector('.header__close');

burger.addEventListener('click', () => {
    menu.classList.add('is-active');
    crtn.classList.add('shtor--on');
    burger.classList.add('burger--off');
})

close.addEventListener('click', () => {
    menu.classList.remove('is-active');
    crtn.classList.remove('shtor--on');
    burger.classList.remove('burger--off');
})