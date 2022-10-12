const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li')
    //cambio de nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animar burger
        burger.classList.toggle('animateB');
    });
}

navSlide();


