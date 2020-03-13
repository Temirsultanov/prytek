var header = document.querySelector('header');
var onScrollHead = function () {
    header.classList.add('black-header');
    if (pageYOffset == 0) {
        header.classList.remove('black-header');
    }
};
window.addEventListener('scroll', onScrollHead);