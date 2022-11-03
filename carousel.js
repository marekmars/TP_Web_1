const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
let slide = 0;
const pButton = document.querySelector(".carousel__button--prev");
const nButton = document.querySelector(".carousel__button--next");
const carouselIndicators = document.getElementsByClassName("carousel__indicator");
const dots = Array.from(carouselIndicators);

let carousel = ["https://ingyrial.sirv.com/Images/Roullier/imgCarousel1.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel2.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel3.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel4.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel5.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel6.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel7.webp",
    "https://ingyrial.sirv.com/Images/Roullier/imgCarousel8.webp"];


const slideAnimation=()=> {
    img1.classList.toggle("carousel__hidden");
    img2.classList.toggle("carousel__hidden");
    img1.src = carousel[slide];
    img2.src = carousel[slide];
    img1.classList.toggle("slideAnimation");
    img2.classList.toggle("slideAnimation");
    dots[slide].classList.add("carousel__indicator__active");
}
const moveSlide = () => {
    nButton.addEventListener("click", (e) => {

        if (slide === carousel.length - 1) {
            slide = 0;
            dots[carousel.length - 1].classList.remove("carousel__indicator__active");
        } else {
            slide++;
            dots[slide - 1].classList.remove("carousel__indicator__active")
        }

        slideAnimation();
    })
    pButton.addEventListener("click", (e) => {
        if (slide === 0) {
            slide = carousel.length - 1;
            dots[0].classList.remove("carousel__indicator__active");
        } else {
            slide--;
            dots[slide + 1].classList.remove("carousel__indicator__active")
        }
        slideAnimation();
    })

    dots.forEach(function (d,i) {

        d.addEventListener("click", (e) => {
            let prevSlide=slide;
            slide=i;
            dots[prevSlide].classList.remove("carousel__indicator__active");
            slideAnimation();
        })

    })
};
moveSlide();