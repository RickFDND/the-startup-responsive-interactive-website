//hamburger menu openen
let hamburgerMenu = document.querySelector('.hamburger');
let navbar = document.querySelector('nav');
hamburgerMenu.addEventListener('click', function(){
    navbar.classList.toggle('hamburger-menu-open');
})

//header zwarte achtergrond
let BodyMenu = document.querySelector('body');
let HeadMenu = document.querySelector('header');
BodyMenu.addEventListener('scroll', () =>{
    HeadMenu.classList.toggle('black-header');
})

const logo = document.querySelector('header');
    if (logo) {
        window.addEventListener('scroll', () => {
            logo.classList.toggle('scrolled', window.scrollY > 0);
        });
    }