const carouselSlide = () => {
    //definicion de constantes
    let slidePosition = 0;
    const slides = document.getElementsByClassName("carousel__img");
    const totalSlides = slides.length - 1;
    /*console.log(totalSlides);*/
    const pButton = document.querySelector(".carousel__button--prev");
    const nButton = document.querySelector(".carousel__button--next");
    const carouselIndicators = document.getElementsByClassName("carousel__indicator");
    const dots=Array.from(carouselIndicators);

    //mover slides para adelante
    pButton.addEventListener("click", (e) => {
        if (slidePosition === 0) {
            slidePosition = totalSlides;
        } else {
            slidePosition--;
        };
        moveSlide();
    })
    //mover slides para atras
    nButton.addEventListener("click", (e) => {
        if (slidePosition === totalSlides) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        moveSlide();
    })
//cambio de clase
    function moveSlide() {
        for (let slide of slides) {
            slide.classList.remove("carousel__img-visible");
            slide.classList.add("carousel__img-hidden");
            slides[slidePosition].classList.add("carousel__img-visible");
        }
        for (let dot of carouselIndicators) {
            dot.classList.remove("carousel__indicator__active");
            carouselIndicators[slidePosition].classList.add("carousel__indicator__active");
        }
        slides[slidePosition].classList.add("slideAnimation");
    }
    //cambio de clase indicadores + accion botones de los mismos
    const carouselIndicatorsClick = () => {
        for (let i = 0; i <dots.length ; i++) {
            dots[i].addEventListener("click", evt => {
                /*console.log("current "+slidePosition)*/
                /*console.log("taret "+i);*/
                let current=slidePosition;
                //se le asigna el valor de i del boton apretado a slideposition
                slidePosition=i;
                moveSlide();
            })
        }
    }
    carouselIndicatorsClick();
}
carouselSlide();