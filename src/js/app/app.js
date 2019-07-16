$(document).ready(function () {
  $('.single_filter_head').click(function () {
    $('.inverted').not($(this).find('.arrow')).removeClass('inverted');
    $(this).find('.arrow').toggleClass('inverted');
    $('.single_filter_list').not($(this).next()).slideUp();
    $(this).next().stop().slideToggle();
  });

  $('.amount_add').click(function () {
    var val = +$('.amount_input').val();
    if (val < 999) {
      $('.amount_input').val(++val)
    }
  });

  $('.amount_sub').click(function () {
    var val = +$('.amount_input').val();
    if (val > 1) {
      $('.amount_input').val(--val);
    }
  });
});