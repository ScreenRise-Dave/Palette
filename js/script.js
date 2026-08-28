// Mobile hamburger menu

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

if (hamburger && nav) {

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {

        link.addEventListener('click', () => {

            navLinks.forEach(item => {
                item.classList.remove('active');
            });

            link.classList.add('active');

            nav.classList.remove('active');

        });

    });

}