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

export {catalogSwiper, productBannerSwiper};