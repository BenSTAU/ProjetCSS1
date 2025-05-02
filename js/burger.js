const burgerMenu = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burgerNav');

burgerMenu.addEventListener('click', function() {
        burgerNav.classList.toggle('burgerNavOuvert');
    });
