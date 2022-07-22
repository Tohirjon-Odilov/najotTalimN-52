let toggleMenu = document.querySelector('button');
let navElm = document.querySelector('.c-nav');

toggleMenu.addEventListener('click', function() {
    navElm.classList.toggle('is-active');
});