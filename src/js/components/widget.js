window.$ = window.jQuery = require('jquery');


const widget = () => {

  $('.widget__content').hide();

  $(".widget__icon").hover(
    function () {
      let hide = $('.widget__content');
      hide.slideToggle();
      $(this).toggleClass('active');
    },
    function () {
      // Вторая функция будет вызвана при уходе мыши с элемента, если это нужно
    }
  );



  // $('.widget__content').hide();
  // $(".widget__icon").on("click",function () {
  //   let hide = $('.widget__content');
  //   hide.slideToggle();
  //   $(this).toggleClass('active')
  // });
}

export default widget