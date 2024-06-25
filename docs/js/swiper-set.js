
/*Главный слайдер*/
const sliderMain = document.querySelector('.main-slider.swiper');
const sliderMainInit = () => {
    yourSliderMain = new Swiper(sliderMain, {
        navigation: true,
        pagination: {
            el: '.swiper-pagination',
        },        
        /*autoplay: {
           delay: 5000,
        }*/
    })
}

/*Отзывы*/
const sliderReviews = document.querySelector('.reviews__swiper.swiper');
const sliderReviewsInit = () => {
    yourSliderReviews = new Swiper(sliderReviews, {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
        }
    })
}

let viewPortWidth = document.documentElement.clientWidth;

/*Сдайдер Сертификаты включается только при ширине вьюпорта от 1024px*/
let certSlider = null;
let certSliderSwiper = document.querySelector('.certificates__container');
let certSliderWrapper = document.querySelector('.certificates__list');
let certSliderSlide = document.querySelectorAll('.certificates__item');

function certSliderInit () {
    if (!certSlider) {
        certSlider = new Swiper(certSliderSwiper, {
            slidesPerView: 3,
            initialSlide: 1,
        });
    }
}

function certSliderDestroy () {
    if (certSlider) {
        certSlider.destroy();
        certSlider = null;
    }
}

function certSliderResize () {
    console.log(viewPortWidth);
       
  
    if (viewPortWidth < 1024) {
        certSliderDestroy();
        certSliderSwiper.classList.remove('swiper');
        certSliderWrapper.classList.remove('swiper-wrapper');
        
        
        if (certSliderSlide.length > 0) {
            for (let i = 0; i < certSliderSlide.length; i++) {
                certSliderSlide[i].classList.remove('swiper-slide');
            }
        }

    } else {
        certSliderInit(); 
        certSliderSwiper.classList.add('swiper');
        certSliderWrapper.classList.add('swiper-wrapper');

        if (certSliderSlide.length > 0) {
            for (let i = 0; i < certSliderSlide.length; i++) {
                certSliderSlide[i].classList.add('swiper-slide');
            }
        }
           

  }
}

/*Сдайдер Регионы в разделе Георграфия проектов включается только при ширине вьюпорта от 1200px*/
let regionsSlider = null;
let regionsSliderSwiper = document.querySelector('.regions__swiper');
let regionsSliderWrapper = document.querySelector('.regions__list');
let regionsSliderSlide = document.querySelectorAll('.regions__item');

function regionsSliderInit () {
    if (!regionsSlider) {
        regionsSlider = new Swiper(regionsSliderSwiper, {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

function regionsSliderDestroy () {
    if (regionsSlider) {
        regionsSlider.destroy();
        regionsSlider = null;
    }
}

function regionsSliderResize () {
    console.log(viewPortWidth);
       
  
    if (viewPortWidth < 1200) {
        regionsSliderDestroy();
        regionsSliderSwiper.classList.remove('swiper');
        regionsSliderWrapper.classList.remove('swiper-wrapper');
        
        
        if (regionsSliderSlide.length > 0) {
            for (let i = 0; i < regionsSliderSlide.length; i++) {
                regionsSliderSlide[i].classList.remove('swiper-slide');
            }
        }

    } else {
        regionsSliderInit(); 
        regionsSliderSwiper.classList.add('swiper');
        regionsSliderWrapper.classList.add('swiper-wrapper');

        if (regionsSliderSlide.length > 0) {
            for (let i = 0; i < regionsSliderSlide.length; i++) {
                regionsSliderSlide[i].classList.add('swiper-slide');
            }
        }
           

  }
}

/*Сдайдер Проекты региона в разделе Георграфия проектов включается только при ширине вьюпорта от 1024px*/
let projectsSlider = null;
let projectsSliderSwiper = document.querySelector('.projects__swiper');
let projectsSliderWrapper = document.querySelector('.projects__slider');
let projectsSliderSlide = document.querySelectorAll('.projects__slide');

function projectsSliderInit () {
    if (!projectsSlider) {
        projectsSlider = new Swiper(projectsSliderSwiper, {
            slidesPerView: 3,
            spaceBetween: 30,           

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                // when window width is >= 320px
                1200: {
                    spaceBetween: 0,
                },
            }
        });
    }
}

function projectsSliderDestroy () {
    if (projectsSlider) {
        projectsSlider.destroy();
        projectsSlider = null;
    }
}

function projectsSliderResize () {
    console.log(viewPortWidth);
       
  
    if (viewPortWidth < 1024) {
        projectsSliderDestroy();
        projectsSliderSwiper.classList.remove('swiper');
        projectsSliderWrapper.classList.remove('swiper-wrapper');
        
        
        if (projectsSliderSlide.length > 0) {
            for (let i = 0; i < projectsSliderSlide.length; i++) {
                projectsSliderSlide[i].classList.remove('swiper-slide');
            }
        }

    } else {
        projectsSliderInit(); 
        projectsSliderSwiper.classList.add('swiper');
        projectsSliderWrapper.classList.add('swiper-wrapper');

        if (projectsSliderSlide.length > 0) {
            for (let i = 0; i < projectsSliderSlide.length; i++) {
                projectsSliderSlide[i].classList.add('swiper-slide');
            }
        }
           

  }
}


window.addEventListener('resize', certSliderResize, regionsSliderResize, projectsSliderResize);


sliderMainInit();
sliderReviewsInit();
projectsSliderResize();
regionsSliderResize();
certSliderResize();