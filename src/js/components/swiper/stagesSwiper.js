import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const stagesSwiper = () => {
const sliders = document.querySelectorAll('.stages__swiper-slide')
let rows = Math.ceil(sliders.length/3)
const nums = document.querySelectorAll('.stages__swiper-slide-num')
nums.forEach((item, i) => {
  item.textContent = (i + 1).toString().padStart(2, '0');
})


    const swiper = new Swiper(".stages__swiper", {
        slidesPerView: 3,
        // spaceBetween: 30,
        grid: {
          rows: rows,
        },
        scrollbar: {
            el: ".stages__swiper-scrollbar",
          },
      });
}

export default stagesSwiper;