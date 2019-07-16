$(document).ready(function () {
  $('.main-slider').slick({
    slidesToShow: 1,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    dots: true,
    appendDots: $('.slider-nav_dots')
  });
  $('.single-product_slider').slick({
    arrows: false,
    infinite: false,
    asNavFor: '.single-product_slider_nav'
  });

  $('.single-product_slider_nav').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.single-product_slider'
  });
});