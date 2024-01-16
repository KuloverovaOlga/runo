import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../../utils/constants';

const reviewsSwiper = () => {
    const swiper = new Swiper('.reviews__swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        scrollbar: {
            el: '.reviews__swiper-scrollbar',
        },

        navigation: {
            nextEl: '.reviews__swiper-button-next',
            prevEl: '.reviews__swiper-button-prev',
        },

        breakpoints: {
            769: {

                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });


    const sliders = document.querySelectorAll('.reviews__swiper-slide-wrapper')
    sliders.forEach((item, i) => {
      const num = item.querySelector('.reviews__swiper-slide-num')
      num.textContent = (i + 1).toString().padStart(2, '0');
    })
};

export default reviewsSwiper;
