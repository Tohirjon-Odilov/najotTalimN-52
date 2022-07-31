var mobileMenu = document.querySelector('.site-aside');
var mobileMenuButton = document.querySelector('.burger-wrapper');
var hero = document.querySelector('.hero-section');

mobileMenuButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('mb-site-aside');
  // hero.classList.toggle('hero-width');
});