$(document).ready(function(){

  $('body').on('click', '.notif', function(){
    $('.notification').fadeToggle();
    $('html, body').toggleClass('overflow');
  });

  var widthMenu = $('.menu').width();
  $('.menu').css('right', '-' + widthMenu + 'px');

  $('body').on('click', '.burger', function() {
    $(this).addClass('active');
    $('.notification').fadeOut();
    $('html, body').addClass('overflow');
    $('.page_overlay').fadeIn();
    $('.menu').addClass('active');
  });

  $('body').on('click', '.menu .close', function() {
    $('.burger').removeClass('active');
    $('.menu').removeClass('active');
    $('.page_overlay').delay(350).fadeOut();
    $('html, body').removeClass('overflow');
    $('.menu_user_nav .lang').next('ul').fadeOut();
  });

  $('body').on('click', '.menu_user_nav .lang', function(){
    $(this).next('ul').fadeToggle('active');
  });

  $('body').on('click', '.menu_user_nav li ul a', function(){
    $('.menu_user_nav li ul').fadeOut();
  });
});
