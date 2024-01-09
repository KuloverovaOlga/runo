import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { rem } from "../../utils/constants";

// CATALOG section
const catalogSwiper = () => {
  const sliderThumbs = new Swiper('.catalog__tab-swiper', {
    slidesPerView: 'auto',
    watchOverflow: true,
    spaceBetween: rem(2),
    speed: 1000,
    navigation: {
      nextEl: '.catalog__tab-btn-next',
      prevEl: '.catalog__tab-btn-prev',
    },
    // on: {
    //   //Показать и скрыть кнопки при прокрутке
    //   fromEdge: function () {
    //     if(document.querySelector('.catalog__tab-btn-next')) {
    //       document.querySelector('.catalog__tab-btn-next').style.display = 'flex';
    //       document.querySelector('.catalog__tab-btn-prev').style.display = 'flex';
    //     }
    //   },
    // },
    breakpoints: {
      769: {
        slidesPerView: 'auto',
        spaceBetween: rem(2),
      },
      210: {
        slidesPerView: 'auto',
        spaceBetween: rem(4),
      }
    }
  });

  // if(document.querySelector('.catalog__tab-swiper')) {
  //   sliderThumbs.on('reachEnd', () => {
  //     document.querySelector('.catalog__tab-btn-next').style.display = 'none';
  //   })
  //   sliderThumbs.on('reachBeginning', () => {
  //     console.log('beggining');
  //     document.querySelector('.catalog__tab-btn-prev').style.display = 'none';
  //   })
  // }


}

export default catalogSwiper;