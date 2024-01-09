import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const certificatesSwiper = () => {
    const swiper = new Swiper(".certificates__swiper", {
        slidesPerView: 3,
        spaceBetween: 40,
        scrollbar: {
            el: ".certificates__swiper-scrollbar",
          },
          navigation: {
            nextEl: '.certificates__swiper-button-next',
            prevEl: '.certificates__swiper-button-prev',
          },
      });

      const sliders = document.querySelectorAll('.certificates__swiper-slide-inner')
      sliders.forEach((item, i) => {
        const num = item.querySelector('.certificates__swiper-slide-num')
        num.textContent = (i + 1).toString().padStart(2, '0');
      })
}

export default certificatesSwiper;