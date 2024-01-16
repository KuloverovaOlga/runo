import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

// CATALOG section
const catalogSwiper = () => {
  const sliderThumbs = new Swiper('.catalog__tab-swiper', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: rem(2),
    speed: 1000,
    navigation: {
      nextEl: '.catalog__tab-btn-next',
      prevEl: '.catalog__tab-btn-prev',
    },
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        spaceBetween: rem(2),
      },
      210: {
        slidesPerView: 'auto',
        spaceBetween: rem(4),
      }
    }
  });
}

// PRODUCT-BANNER section
const productBannerSwiper = () => {
  const sliderThumbs = new Swiper('.product-banner__thumb-slider', {
    slidesPerView: 3,
    spaceBetween: rem(4),
    speed: 1000,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const sliderImgs = new Swiper('.product-banner__swiper', {
    spaceBetween: rem(2),
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.product-banner__img-btn-next',
      prevEl: '.product-banner__img-btn-prev',
    },
    thumbs: {
      swiper: sliderThumbs,
    },
    scrollbar: {
      el: '.product-banner__swiper-scrollbar',
    },
  });
}

// BENEFITS section
const benefitsSwiper = () => {
  const sliderImgs = new Swiper('.benefits__swiper', {
    spaceBetween: rem(4),
    speed: 1000,
    slidesPerView: 1,
    navigation: {
      nextEl: '.benefits__btn-next',
      prevEl: '.benefits__btn-prev',
    },
    scrollbar: {
      el: '.benefits__swiper-scrollbar',
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: rem(2),
      },
    }
  });
}

// OUR-WORKS section
const ourWorksTabSwiper = () => {
  const sliderThumbs = new Swiper('.our-works__tab-swiper', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: rem(2),
    speed: 1000,
    navigation: {
      nextEl: '.our-works__tab-btn-next',
      prevEl: '.our-works__tab-btn-prev',
    },
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        spaceBetween: rem(2),
      },
      210: {
        slidesPerView: 'auto',
        spaceBetween: rem(4),
      }
    }
  });
}

// SPECIALISTS section
const specialistsSwiper = () => {
  const sliderThumbs = new Swiper('.specialists__swiper', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: rem(2),
    speed: 1000,
    navigation: {
      nextEl: '.specialists__btn-next',
      prevEl: '.specialists__btn-prev',
    },
    scrollbar: {
      el: '.specialists__swiper-scrollbar',
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
        spaceBetween: rem(14),
      },
    },
  });
}

// WE-DOING section
const weDoingSwiper = () => {
  const sliderThumbs = new Swiper('.we-doing__swiper', {
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: rem(2),
    speed: 1000,
    navigation: {
      nextEl: '.we-doing__btn-next',
      prevEl: '.we-doing__btn-prev',
    },
    scrollbar: {
      el: '.we-doing__swiper-scrollbar',
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
      },
    },
  });
}

// ANSWERS section
const answersSwiper = () => {
  const sliderThumbs = new Swiper('.answers__tab-swiper', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: rem(2),
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        spaceBetween: rem(2),
      },
      210: {
        slidesPerView: 'auto',
        spaceBetween: rem(4),
      }
    }
  });
}

// POPUP CERTIFICATES section
const popupCertSwiper = () => {
  const sliderThumbs = new Swiper('.popup-cert__thub-swiper', {
    slidesPerView: 4,
    spaceBetween: rem(2),
    speed: 500,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const sliderImgs = new Swiper('.popup-cert__swiper', {
    spaceBetween: rem(2),
    speed: 300,
    navigation: {
      nextEl: '.popup-cert__swiper-button-next',
      prevEl: '.popup-cert__swiper-button-prev',
    },
    thumbs: {
      swiper: sliderThumbs,
    },
  });

  $('.certificates__swiper-slide').click(function(event) {
    sliderImgs.slideTo($('.certificates__swiper-slide').index(this))
  });
}

// RANGE POPUP
const rangePopupSwiper = () => {
  const thumbSwiperOpt = {
    slidesPerView: 5,
    spaceBetween: rem(2),
    speed: 500,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
  }
  const thumbSwiper1 = new Swiper('.range-popup__thumb-swiper--1', thumbSwiperOpt);
  const swiperInner1Pop = new Swiper('.range-popup__swiper-slide-swiper--1', {
    spaceBetween: rem(2),
    speed: 300,
    loop: true,
    navigation: {
        nextEl: '.popup-range__swiper-button-next',
        prevEl: '.popup-range__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper1,
    },
  });
  $('.range__swiper-slide-swiper--1 .range__swiper-slide-swiper-slide-img-box').click(function(event) {
    swiperInner1Pop.slideTo($(this).attr('data-index'))
  });

  const thumbSwiper2 = new Swiper('.range-popup__thumb-swiper--2', thumbSwiperOpt);
  const swiperInner2 = new Swiper('.range-popup__swiper-slide-swiper--2', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    navigation: {
        nextEl: '.popup-range__swiper-button-next',
        prevEl: '.popup-range__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper2,
    },
  })
  $('.range__swiper-slide-swiper--2 .range__swiper-slide-swiper-slide-img-box').click(function(event) {
    swiperInner2.slideTo($(this).attr('data-index'))
  });

  const thumbSwiper3 = new Swiper('.range-popup__thumb-swiper--3', thumbSwiperOpt);
  const swiperInner3 = new Swiper('.range-popup__swiper-slide-swiper--3', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    navigation: {
        nextEl: '.popup-range__swiper-button-next',
        prevEl: '.popup-range__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper3,
    },
  })
  $('.range__swiper-slide-swiper--3 .range__swiper-slide-swiper-slide-img-box').click(function(event) {
    swiperInner3.slideTo($(this).attr('data-index'))
  });

  const thumbSwiper4 = new Swiper('.range-popup__thumb-swiper--4', thumbSwiperOpt);
  const swiperInner4 = new Swiper('.range-popup__swiper-slide-swiper--4', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    navigation: {
        nextEl: '.popup-range__swiper-button-next',
        prevEl: '.popup-range__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper4,
    },
  })
  $('.range__swiper-slide-swiper--4 .range__swiper-slide-swiper-slide-img-box').click(function(event) {
    swiperInner4.slideTo($(this).attr('data-index'))
  });

  const thumbSwiper5 = new Swiper('.range-popup__thumb-swiper--5', thumbSwiperOpt);
  const swiperInner5 = new Swiper('.range-popup__swiper-slide-swiper--5', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    navigation: {
        nextEl: '.popup-range__swiper-button-next',
        prevEl: '.popup-range__swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper5,
    },
  })
  $('.range__swiper-slide-swiper--5 .range__swiper-slide-swiper-slide-img-box').click(function(event) {
    swiperInner5.slideTo($(this).attr('data-index'))
  });

  const navItems = document.querySelectorAll('.range__swiper-nav-item');
  const popupSlides = document.querySelectorAll('.range-popup__swiper-slide');
  let currInd = 0;

  // Обработчик клика на элемент навигации
  navItems.forEach((item, index) => {
      item.addEventListener('click', function () {
          popupSlides[currInd].classList.remove('active');
          popupSlides[index].classList.add('active');
          currInd = index;
      });
  });

};

export {catalogSwiper, productBannerSwiper, benefitsSwiper, ourWorksTabSwiper, specialistsSwiper, weDoingSwiper, answersSwiper, popupCertSwiper, rangePopupSwiper};