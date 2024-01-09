import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const exclusivitySwiper = () => {
    const swiper = new Swiper(".exclusivity__swiper", {
        slidesPerView: 2.5,

        // spaceBetween: 30,
        scrollbar: {
            el: ".exclusivity__swiper-scrollbar",
          },
          navigation: {
            nextEl: '.exclusivity__swiper-button-next',
            prevEl: '.exclusivity__swiper-button-prev',
          },
      });
}

export default exclusivitySwiper;