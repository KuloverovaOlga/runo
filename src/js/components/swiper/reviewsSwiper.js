import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const reviewsSwiper = () => {
    const swiper = new Swiper(".reviews__swiper", {
        slidesPerView: 3,
        spaceBetween: 40,
        scrollbar: {
            el: ".reviews__swiper-scrollbar",
          },

          navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
          },
      });
}

export default reviewsSwiper;