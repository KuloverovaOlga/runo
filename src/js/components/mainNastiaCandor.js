window.$ = window.jQuery = require('jquery');
import {catalogSwiper, productBannerSwiper, benefitsSwiper, ourWorksTabSwiper, specialistsSwiper, weDoingSwiper} from './swiper/swipers';

document.addEventListener('DOMContentLoaded', () => {
    try {
        catalogSwiper();
    } catch {}
    try {
        productBannerSwiper();
    } catch {}
    try {
        benefitsSwiper();
    } catch {}
    try {
        ourWorksTabSwiper();
    } catch {}
    try {
        specialistsSwiper();
    } catch {}
    try {
      weDoingSwiper();
    } catch {}
});

//---tabs----------------------------------------------//

// CATALOG tabs
$('.catalog__tab-item').on('click', function() {
  let id = $(this).attr('data-tab');
  let content = $('.catalog__display[data-tab="'+ id +'"]');
  
  $('.catalog__tab-item._active').removeClass('_active');
  $(this).addClass('_active');
  
  $('.catalog__display').removeClass('active');
  content.addClass('active');
});

// OUR_WORKS tabs
$('.our-works__tab-item').on('click', function() {
  let id = $(this).attr('data-tab');
  let content = $('.our-works__display[data-tab="'+ id +'"]');
  
  $('.our-works__tab-item._active').removeClass('_active');
  $(this).addClass('_active');
  
  $('.our-works__display').removeClass('active');
  content.addClass('active');
});
window.$ = window.jQuery = require('jquery');
$(document).ready(function() {
    let maxVisibleSlides = 6;
    let incrementSlides = 2;
    
    function setupSlides(activeTab) {
        let currentSlideItems = $(`.our-works__display[data-tab='${activeTab}'] .our-works__item`);
        
        // Показываем начальные слайды
        currentSlideItems.hide();
        currentSlideItems.slice(0, maxVisibleSlides).show();
        
        // Если число слайдов меньше или равно maxVisibleSlides, скрываем кнопку
        if (currentSlideItems.length <= maxVisibleSlides) {
            $('.our-works__more-btn').hide();
        } else {
            $('.our-works__more-btn').show();
        }
    
        // Обновляем обработчик событий
        $('.our-works__more-btn').off('click').on('click', function (e) {
            e.preventDefault();
        
            $(`.our-works__display[data-tab='${activeTab}'] .our-works__item:hidden`).slice(0, incrementSlides).slideDown();
        
            if ($(`.our-works__display[data-tab='${activeTab}'] .our-works__item:hidden`).length == 0) {
                $('.our-works__more-btn').fadeOut('slow');
            }
        });
    }
    
    // Первоначальная настройка слайдов
    setupSlides($('.our-works__tab-item._active').data('tab'));
    
    // Ваш обработчик переключения вкладок
    $('.our-works__tab-item').on('click', function() {
        
        let activeTab = $('.our-works__tab-item._active').data('tab');
        setupSlides(activeTab);
    });
  });