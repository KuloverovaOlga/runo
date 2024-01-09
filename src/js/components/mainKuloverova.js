import advantagesSwiper from './swiper/advantagesSwiper';
import stagesSwiper from './swiper/stagesSwiper';
import heroSwiper from './swiper/heroSwiper';
import certificatesSwiper from './swiper/certificatesSwiper';
import reviewsSwiper from './swiper/reviewsSwiper';
import exclusivitySwiper from './swiper/exclusivitySwiper';
import pricesSwiper from './swiper/pricesSwiper';
import catalogSwiper from './swiper/swipers';

document.addEventListener('DOMContentLoaded', () => {
    try {
        advantagesSwiper();
    } catch {}
    try {
        stagesSwiper();
    } catch {}
    try {
        heroSwiper();
    } catch {}
    try {
        certificatesSwiper();
    } catch {}
    try {
        reviewsSwiper();
    } catch {}
    try {
        exclusivitySwiper();
    } catch {}
    try {
        pricesSwiper();
    } catch {}
    try {
        catalogSwiper();
    } catch {}

});


import Choices from 'choices.js';
import 'inputmask';
window.$ = window.jQuery = require('jquery');
let timer;

const rem = function (rem) {
    if (window.innerWidth > 768) {
        return 0.005208335 * window.innerWidth * rem;
    } else {
        // где 375 это ширина мобильной версии макета
        return (100 / 375) * (0.05 * window.innerWidth) * rem;
    }
};

//dropdown//

$(function () {
    if ($(window).width() > 768) {
        $('.dropdown').find('.header__dropdown').hide();
        $('.dropdown').on('mouseenter', function () {
            clearTimeout(timer);
            $('.dropdown').find('.header__dropdown').hide();
            $(this).find('.header__dropdown').show();
        });

        $('.dropdown').on('mouseleave', function () {
            const drop = $(this).find('.header__dropdown');
            timer = setTimeout(function () {
                drop.hide();
            }, 200);
            $(this)
                .find('.header__dropdown')
                .on('mouseenter', function () {
                    clearTimeout(timer);
                });
            $(this)
                .find('.header__dropdown')
                .on('mouseleave', function () {
                    drop.hide();
                });
        });

        $('.header__dropdown-catalog-item').each(function () {
            let hide = $(this).find('.header__dropdown-catalog-content');
            hide.hide();
            if ($(this).hasClass('active')) {
                $(this).find('.header__dropdown-catalog-content').show();
            }
            $(this).on('click', function () {
                $('.header__dropdown-catalog-item').each(function () {
                    $(this).find('.header__dropdown-catalog-content').hide();
                    $(this).removeClass('active');
                });
                hide.show();
                $(this).addClass('active');
            });
        });

        $('.header__dropdown-catalog-content').first().css('right', '15.5rem');
    }
    if ($(window).width() <= 768) {
        $('.header__dropdown-catalog-content').find('.list').hide();
        $('.header__dropdown-catalog-content + .list-title').on('click', function () {
            $(this).parent().find('.list').slideToggle();
        });

        $('.dropdown').find('.header__dropdown').slideUp();
        $('.dropdown > span').on('click', function () {
            const parent = $(this).parent();

            if (parent.hasClass('active')) {
                parent.find('.header__dropdown').slideUp();
                parent.removeClass('active');
            } else {
                parent.find('.header__dropdown').slideDown();
                parent.addClass('active');
            }
        });

        $('.list-wrap').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).find('.list').slideUp();
            } else {
                $(this).find('.list').slideDown();
            }
            $(this).toggleClass('active');
        });

        $('.button__close').on('click', function () {
            $('.header__nav').slideUp();
            $('.header__phone').removeClass('active');
            $('.header__burger').removeClass('active');
            $('.button__close').removeClass('active');
            $('.header__call').removeClass('active');
        });

        $('.header__burger').on('click', function () {
            $('.header__nav').slideDown();
            $('.header__phone').addClass('active');
            $('.header__burger').addClass('active');
            $('.button__close').addClass('active');
            $('.header__call').addClass('active');
        });
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     const dropdowns = document.querySelectorAll('.dropdown');

//     if (window.innerWidth > 768) {
//         dropdowns.forEach(function (dropdown) {
//             const dropdownContent = dropdown.querySelector('.header__dropdown');
//             let timer;

//             dropdownContent.style.display = 'none';

//             dropdown.addEventListener('mouseenter', function () {
//                 clearTimeout(timer);
//                 dropdowns.forEach(function (item) {
//                     item.querySelector('.header__dropdown').style.display = 'none';
//                 });
//                 dropdownContent.style.display = 'flex';
//             });

//             dropdown.addEventListener('mouseleave', function () {
//                 timer = setTimeout(function () {
//                     dropdownContent.style.display = 'none';
//                 }, 200);
//             });

//             dropdownContent.addEventListener('mouseenter', function () {
//                 clearTimeout(timer);
//             });

//             dropdownContent.addEventListener('mouseleave', function () {
//                 dropdownContent.style.display = 'none';
//             });
//         });

//         const catalogItems = document.querySelectorAll('.header__dropdown-catalog-item');

//         catalogItems.forEach(function (item) {
//             const hideContent = item.querySelector('.header__dropdown-catalog-content');
//             hideContent.style.display = 'none';

//             item.addEventListener('click', function () {
//                 catalogItems.forEach(function (catalogItem) {
//                     catalogItem.querySelector('.header__dropdown-catalog-content').style.display = 'none';
//                     catalogItem.classList.remove('active');
//                 });

//                 hideContent.style.display = 'flex';
//                 item.classList.add('active');
//             });
//         });

//         document.querySelector('.header__dropdown-catalog-content').style.right = '15.5rem';
//     }

//     if (window.innerWidth <= 768) {
//         const catalogContents = document.querySelectorAll('.header__dropdown-catalog-content');
//         const listTitles = document.querySelectorAll('.header__dropdown-catalog-content + .list-title');

//         catalogContents.forEach(function (content) {
//             content.querySelector('.list').style.display = 'none';
//         });

//         listTitles.forEach(function (title) {
//             title.addEventListener('click', function () {
//                 const list = this.parentNode.querySelector('.list');
//                 list.style.display = list.style.display === 'none' ? 'flex' : 'none';
//             });
//         });

//         dropdowns.forEach(function (dropdown) {
//             const dropdownContent = dropdown.querySelector('.header__dropdown');

//             dropdownContent.style.display = 'none';
//             dropdown.classList.remove('active');

//             dropdown.querySelector('span').addEventListener('click', function () {
//                 if (dropdown.classList.contains('active')) {
//                     dropdownContent.style.display = 'none';
//                     dropdown.classList.remove('active');
//                 } else {
//                     dropdownContent.style.display = 'flex';
//                     dropdown.classList.add('active');
//                 }
//             });
//         });

//         const listWraps = document.querySelectorAll('.list-wrap');

//         listWraps.forEach(function (listWrap) {
//             listWrap.addEventListener('click', function () {
//                 const list = this.querySelector('.list');
//                 list.style.display = list.style.display === 'none' ? 'flex' : 'none';
//                 this.classList.toggle('active');
//             });
//         });

//         document.querySelector('.button__close').addEventListener('click', function () {
//             document.querySelector('.header__nav').style.display = 'none';
//             document.querySelector('.header__phone').classList.remove('active');
//             document.querySelector('.header__burger').classList.remove('active');
//             document.querySelector('.button__close').classList.remove('active');
//             document.querySelector('.header__call').classList.remove('active');
//         });

//         document.querySelector('.header__burger').addEventListener('click', function () {
//             document.querySelector('.header__nav').style.display = 'flex';
//             document.querySelector('.header__phone').classList.add('active');
//             document.querySelector('.header__burger').classList.add('active');
//             document.querySelector('.button__close').classList.add('active');
//             document.querySelector('.header__call').classList.add('active');
//         });
//     }

// });