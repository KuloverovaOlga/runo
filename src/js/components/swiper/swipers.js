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

export {catalogSwiper, productBannerSwiper, benefitsSwiper, ourWorksTabSwiper, specialistsSwiper, weDoingSwiper};