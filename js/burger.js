const burgerMenu = document.querySelector('.burgerMenu');
const burgerNav = document.querySelector('.burgerNav');

burgerMenu.addEventListener('click', function() {
        burgerNav.classList.toggle('burgerNavOuvert');
    });
