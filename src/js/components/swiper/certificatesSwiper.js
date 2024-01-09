import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const certificatesSwiper = () => {
    const swiper = new Swiper(".certificates__swiper", {
        slidesPerView: 3,

        // spaceBetween: 30,
        scrollbar: {
            el: ".certificates__swiper-scrollbar",
          },
          navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
          },
      });
}

export default certificatesSwiper;