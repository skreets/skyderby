$(document).ready(function(){

  $('body').on('click', '.notification', function(){
    alert('notification');
  });

  var widthMenu = $('.menu').width();
  $('.menu').css('right', '-' + widthMenu + 'px');

  $('body').on('click', '.burger', function() {
    $(this).addClass('active');
    $('html, body').addClass('overflow');
    $('.page-overlay').fadeIn();
    $('.menu').addClass('active');
  });

  $('body').on('click', '.menu .close', function() {
    $('.burger').removeClass('active');
    $('.menu').removeClass('active');
    $('.page-overlay').delay(350).fadeOut();
    $('html, body').removeClass('overflow');
  });
});
