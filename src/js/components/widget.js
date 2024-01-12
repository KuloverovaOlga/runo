window.$ = window.jQuery = require('jquery');


const widget = () => {

    $('.widget__content').hide();
    $(".widget__icon").on("click",function () {
      let hide = $('.widget__content');
      hide.slideToggle();
      $(this).toggleClass('active')
    });
}

export default widget