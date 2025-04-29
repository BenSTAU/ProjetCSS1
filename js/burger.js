const burgerMenu = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burgerNav');

document.addEventListener('DOMContentLoaded',function() {
    burgerMenu.addEventListener('click', function() {
        burgerNav.classList.toggle('burgerNavOuvert');
    });
});