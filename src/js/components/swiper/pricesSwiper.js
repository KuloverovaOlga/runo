import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const pricesSwiper = () => {
    const swiper = new Swiper(".prices__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        scrollbar: {
          el: ".prices__swiper-scrollbar",
        },
          navigation: {
            nextEl: '.prices__swiper-button-next',
            prevEl: '.prices__swiper-button-prev',
          },

          breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
      });
}

export default pricesSwiper;