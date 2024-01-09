import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const stagesSwiper = () => {
    const swiper = new Swiper(".stages__swiper", {
        slidesPerView: 3,
        // spaceBetween: 30,
        grid: {
          rows: 2,
        },
        scrollbar: {
            el: ".stages__swiper-scrollbar",
          },
      });
}

export default stagesSwiper;