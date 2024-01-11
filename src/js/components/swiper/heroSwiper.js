
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const heroSwiper = () => {
    const slider1 = new Swiper('.hero__swiper ', {
        slidesPerView: 1,
        spaceBetween: rem(0),
        loop: true,
        slideToClickedSlide: true,
        parallax: true,
        navigation: {
          nextEl: '.hero__swiper-button-next',
          prevEl: '.hero__swiper-button-prev',
        },
        scrollbar: {
          el: '.hero__swiper-scrollbar',
      },
        speed: 1000,
        breakpoints: {
          769: {
            slidesPerView: 1,
            spaceBetween: rem(0),
          },
          
        }
      });

    
}

export default heroSwiper