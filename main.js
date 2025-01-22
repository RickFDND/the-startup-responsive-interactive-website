//hamburger menu openen
let hamburgerMenu = document.querySelector('.hamburger');
let navbar = document.querySelector('nav');
hamburgerMenu.addEventListener('click', function(){
    navbar.classList.toggle('hamburger-menu-open');
})

//header zwarte achtergrond
const logo = document.querySelector('header');
    if (logo) {
        window.addEventListener('scroll', () => {
            logo.classList.toggle('scrolled', window.scrollY > 0);
        });
    }

//newsletter
let SignUp = document.querySelector('.random');
let newsLetter = document.querySelector('.newsletter');
SignUp.addEventListener('click', function(){
    newsLetter.classList.add('newsletter-open');
})
