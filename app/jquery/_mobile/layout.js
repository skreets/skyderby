$(document).ready(function(){

  $('body').on('click', '.notif', function(){
    $('.notification').fadeToggle();
    $('html, body').toggleClass('overflow');
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
    $('.menu-user-nav .lang').next('ul').fadeOut();
  });

  $('body').on('click', '.menu-user-nav .lang', function(){
    $(this).next('ul').fadeToggle('active');
  });

  $('body').on('click', '.menu-user-nav li ul a', function(){
    $('.menu-user-nav li ul').fadeOut();
  });
});
