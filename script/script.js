var header = document.querySelector('header');
var onScrollHead = function () {
    if (!logo.classList.contains('logo-act')){
        header.classList.add('black-header');
        if (pageYOffset == 0) {
            header.classList.remove('black-header');
        };
    };
};
window.addEventListener('scroll', onScrollHead);
var burger = document.querySelector('.burger-menu');
var burgerTop = burger.querySelector('.burger1');
var burgerMiddle = burger.querySelector('.burger2');
var burgerBottom = burger.querySelector('.burger3');
var mobileMenu = document.querySelector('.menu-mobile');
var logo = header.querySelector('.logo');
var onBurgerClick = function () {
    if (pageYOffset > 0) {
        var header = document.querySelector('header');
        header.classList.toggle('black-header');
    };
    burgerTop.classList.toggle('burger1-act');
    burgerMiddle.classList.toggle('burger2-act');
    burgerBottom.classList.toggle('burger3-act');
    mobileMenu.classList.toggle('translate0')
    logo.classList.toggle('logo-act');
};
burger.addEventListener('click', onBurgerClick);
window.addEventListener('resize', function() {
    if (window.innerWidth > 767 && burgerTop.classList.contains('burger1-act')){
       onBurgerClick(); 
    }
})