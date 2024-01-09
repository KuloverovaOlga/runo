import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

const advantagesSwiper = () => {
    const swiper = new Swiper(".advantages__swiper", {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
        // spaceBetween: 40,
        scrollbar: {
            el: ".advantages__swiper-scrollbar",
          },
      });
}

export default advantagesSwiper;