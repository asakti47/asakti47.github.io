const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

window.addEventListener('scroll', function() {
    var element = document.querySelector('.social-media-sidebar');
    if (window.scrollY > 100) {
       element.classList.add('hide');
    } else {
       element.classList.remove('hide');
    }
});