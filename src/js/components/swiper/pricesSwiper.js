import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const pricesSwiper = () => {
    const swiper = new Swiper(".prices__swiper", {
        slidesPerView: 3,

        // spaceBetween: 30,
  
          navigation: {
            nextEl: '.prices__swiper-button-next',
            prevEl: '.prices__swiper-button-prev',
          },
      });
}

export default pricesSwiper;