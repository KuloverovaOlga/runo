

import advantagesSwiper from './swiper/advantagesSwiper';
import stagesSwiper from './swiper/stagesSwiper';
import heroSwiper from './swiper/heroSwiper';
import certificatesSwiper from './swiper/certificatesSwiper';
import reviewsSwiper from './swiper/reviewsSwiper';
import exclusivitySwiper from './swiper/exclusivitySwiper';
import pricesSwiper from './swiper/pricesSwiper';
import rangeSwiper from './swiper/rangeSwiper';



import questionsMain from './questionsMain';
import showMore from './showMore';
import select from './select';
import widget from './widget';
import phoneMask from './phoneMask';
import dropdown from './dropdown';

import popup from './popup';
import form from './form';


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
    try {
        rangeSwiper();
    } catch {}



    try {
        questionsMain();
    } catch {}
    try {
        showMore();
    } catch {}
    try {
        select();
    } catch {}
    try {
        widget();
    } catch {}
    try {
        phoneMask();
    } catch {}
    try {
        dropdown();
    } catch {}



    try {
        popup();
    } catch {}

    try {
        form();
    } catch {}


});
