import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const exclusivitySwiper = () => {
    const swiper = new Swiper(".exclusivity__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        scrollbar: {
            el: ".exclusivity__swiper-scrollbar",
          },
          navigation: {
            nextEl: '.exclusivity__swiper-button-next',
            prevEl: '.exclusivity__swiper-button-prev',
          },
          breakpoints: {
            769: {
                slidesPerView: 'auto',
                spaceBetween: 40,
            },
        },

      });

      const sliders = document.querySelectorAll('.exclusivity__swiper-slide-inner')
      sliders.forEach((item, i) => {
        const num = item.querySelector('.exclusivity__swiper-slide-num')
        num.textContent = (i + 1).toString().padStart(2, '0');
      })

}

export default exclusivitySwiper;