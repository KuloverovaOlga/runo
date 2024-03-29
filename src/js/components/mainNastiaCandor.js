window.$ = window.jQuery = require('jquery');
import {catalogSwiper, productBannerSwiper, benefitsSwiper, ourWorksTabSwiper, specialistsSwiper, weDoingSwiper, answersSwiper, popupCertSwiper, rangePopupSwiper} from './swiper/swipers';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
    try {
        answersSwiper();
    } catch {}
    try {
        popupCertSwiper();
    } catch {}
    try {
      rangePopupSwiper();
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

// ANSWERS tabs
$('.answers__tab-item').on('click', function() {
  let id = $(this).attr('data-tab');
  let content = $('.answers__display[data-tab="'+ id +'"]');
  
  $('.answers__tab-item._active').removeClass('_active');
  $(this).addClass('_active');
  
  $('.answers__display').removeClass('active');
  content.addClass('active');
});
$(document).ready(function() {
    let maxVisibleSlides = 10;
    let incrementSlides = 10;
    
    function setupSlides(activeTab) {
        let currentSlideItems = $(`.answers__display[data-tab='${activeTab}'] .questions__accordion-item`);
        
        // Показываем начальные слайды
        currentSlideItems.hide();
        currentSlideItems.slice(0, maxVisibleSlides).show();
        
        // Если число слайдов меньше или равно maxVisibleSlides, скрываем кнопку
        if (currentSlideItems.length <= maxVisibleSlides) {
            $('.answers__more-btn').hide();
        } else {
            $('.answers__more-btn').show();
        }
    
        // Обновляем обработчик событий
        $('.answers__more-btn').off('click').on('click', function (e) {
            e.preventDefault();
        
            $(`.answers__display[data-tab='${activeTab}'] .questions__accordion-item:hidden`).slice(0, incrementSlides).slideDown();
        
            if ($(`.answers__display[data-tab='${activeTab}'] .questions__accordion-item:hidden`).length == 0) {
                $('.answers__more-btn').fadeOut('slow');
            }
        });
    }
    
    // Первоначальная настройка слайдов
    setupSlides($('.answers__tab-item._active').data('tab'));
    
    // Ваш обработчик переключения вкладок
    $('.answers__tab-item').on('click', function() {
        
        let activeTab = $('.answers__tab-item._active').data('tab');
        setupSlides(activeTab);
    });
});

// fancy box
$(document).ready(function() {
  Fancybox.bind('[data-fancybox="video-measure"]', {
    // Custom options
  });
  Fancybox.bind('[data-fancybox="video-install"]', {
    // Custom options
  }); 
});

// CATALOG section
$(document).ready(function() {
  let maxVisibleSlides = 6;
  let incrementSlides = 2;
  
  function setupSlides(activeTab) {
      let currentSlideItems = $(`.catalog__display[data-tab='${activeTab}'] .catalog__item`);
      
      // Показываем начальные слайды
      currentSlideItems.hide();
      currentSlideItems.slice(0, maxVisibleSlides).show();
      
      // Если число слайдов меньше или равно maxVisibleSlides, скрываем кнопку
      if (currentSlideItems.length <= maxVisibleSlides) {
          $('.catalog__more-btn').hide();
      } else {
          $('.catalog__more-btn').show();
      }
  
      // Обновляем обработчик событий
      $('.catalog__more-btn').off('click').on('click', function (e) {
          e.preventDefault();
      
          $(`.catalog__display[data-tab='${activeTab}'] .catalog__item:hidden`).slice(0, incrementSlides).slideDown();
      
          if ($(`.catalog__display[data-tab='${activeTab}'] .catalog__item:hidden`).length == 0) {
              $('.catalog__more-btn').fadeOut('slow');
          }
      });
  }
  
  // Первоначальная настройка слайдов
  setupSlides($('.catalog__tab-item._active').data('tab'));
  // Ваш обработчик переключения вкладок
  $('.catalog__tab-item').on('click', function() {
      
      let activeTab = $('.catalog__tab-item._active').data('tab');
      setupSlides(activeTab);
  });
});