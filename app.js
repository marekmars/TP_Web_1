const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li')
    //cambio de nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animar lnks
        navLinks.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.5}s`;
            }
        });
        //animar burger
        burger.classList.toggle('animateB');
    });
}

navSlide();


