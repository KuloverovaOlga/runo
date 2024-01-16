import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../../utils/constants';

const advantagesSwiper = () => {
    const swiper = new Swiper('.advantages__swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
   
        scrollbar: {
            el: '.advantages__swiper-scrollbar',
        },

        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 0,
                
                grid: {
                    rows: 2,
                },
            },
        },
    });
};

export default advantagesSwiper;
