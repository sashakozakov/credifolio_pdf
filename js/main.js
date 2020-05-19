$(document).ready(() => {

  $('.track_slider').slick({
    // cssEase: 'ease',
    // fade: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: '.track_slide',
  });


  function disableScrolling() {
    if ($(document).height() > $(window).height()) {
      const scrollTop = $('html').scrollTop()
        ? $('html').scrollTop()
        : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
      $('html')
        .addClass('disable-scrolling')
        .css('top', -scrollTop);
    }
  }

  function enableScrolling() {
    const scrollTop = parseInt($('html').css('top'), 10);
    $('html').removeClass('disable-scrolling');
    $('html,body').scrollTop(-scrollTop);
  }

  function bindEvents() {
    $('.hamburger').on('click', () => {
      $(this).toggleClass('active');
      const $header = $('.header');

      if ($header.hasClass('is-opened')) {
        $header.removeClass('is-opened');
        enableScrolling();
      } else {
        $header.addClass('is-opened');
        disableScrolling();
      }
    });
  }

  /* FUNCTION CALLS */
  /* ============= */

  bindEvents();



  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('small_header');
    }
    else {
      $('.header').removeClass('small_header');
    }
  });
});
