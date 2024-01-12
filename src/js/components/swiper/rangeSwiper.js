import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../../utils/constants';

const rangeSwiper = () => {
    // Инициализация Swiper с автоматической высотой, горизонтальным направлением и одним видимым слайдом за раз
    const swiper = new Swiper('.range__swiper', {
        slidesPerView: 1,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true,
        },
        speed: 2000,
        spaceBetween: 0,
        direction: 'horizontal',
        on: {},
    });
    const swiperInner1 = new Swiper('.range__swiper-slide-swiper--1', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        speed: 300,
        // allowTouchMove: false,
        scrollbar: {
            el: '.range__swiper-slide-swiper--1 .range__swiper-scrollbar',
        },
        navigation: {
            nextEl: '.range__swiper-slide-swiper--1 .range__swiper-button-next',
            prevEl: '.range__swiper-slide-swiper--1 .range__swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 40,
            },
        },

  
    });

    const swiperInner2 = new Swiper('.range__swiper-slide-swiper--2', {
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      speed: 300,
      // allowTouchMove: false,
      scrollbar: {
          el: '.range__swiper-slide-swiper--2 .range__swiper-scrollbar',
      },
      navigation: {
          nextEl: '.range__swiper-slide-swiper--2 .range__swiper-button-next',
          prevEl: '.range__swiper-slide-swiper--2 .range__swiper-button-prev',
      },

      breakpoints: {
          768: {
              slidesPerView: 'auto',
              spaceBetween: 40,
          },
      },
    })

    const swiperInner3 = new Swiper('.range__swiper-slide-swiper--3', {
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
    
      speed: 300,
      // allowTouchMove: false,
      scrollbar: {
          el: '.range__swiper-slide-swiper--3 .range__swiper-scrollbar',
      },
      navigation: {
          nextEl: '.range__swiper-slide-swiper--3 .range__swiper-button-next',
          prevEl: '.range__swiper-slide-swiper--3 .range__swiper-button-prev',
      },

      breakpoints: {
          768: {
              slidesPerView: 'auto',
              spaceBetween: 40,
          },
      },
    })

    const swiperInner4 = new Swiper('.range__swiper-slide-swiper--4', {
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      speed: 300,
      // allowTouchMove: false,
      scrollbar: {
          el: '.range__swiper-slide-swiper--4 .range__swiper-scrollbar',
      },
      navigation: {
          nextEl: '.range__swiper-slide-swiper--4 .range__swiper-button-next',
          prevEl: '.range__swiper-slide-swiper--4 .range__swiper-button-prev',
      },

      breakpoints: {
          768: {
              slidesPerView: 'auto',
              spaceBetween: 40,
          },
      },
    })

    const swiperInne5 = new Swiper('.range__swiper-slide-swiper--5', {
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      speed: 300,
      // allowTouchMove: false,
      scrollbar: {
          el: '.range__swiper-slide-swiper--5 .range__swiper-scrollbar',
      },
      navigation: {
          nextEl: '.range__swiper-slide-swiper--5 .range__swiper-button-next',
          prevEl: '.range__swiper-slide-swiper--5 .range__swiper-button-prev',
      },

      breakpoints: {
          768: {
              slidesPerView: 'auto',
              spaceBetween: 40,
          },
      },
    })

    const navItems = document.querySelectorAll('.range__swiper-nav-item');

    // Обработчик клика на элемент навигации
    navItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            // Переход к указанному слайду при клике на элемент навигации
            swiper.slideTo(index);

            navItems.forEach((item) => {
                item.classList.remove('isActive');
            });
            item.classList.add('isActive');
        });
    });
};

export default rangeSwiper;
