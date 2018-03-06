$(window).on('load',function(){

  $('.sidebar').overlayScrollbars({
    className: 'os-theme-thin-light',
    scrollbars: {
      autoHide: 'leave',
      autoHideDelay: 0,
    }
  });

});

$(document).ready(function(){
  $('body').on('click', '.notify', function(){
    $('.notification').fadeToggle();
  });

  $('.notification_wrapp').overlayScrollbars({
    className: 'os-theme-thin-dark',
    scrollbars: {
      autoHide: 'leave',
      autoHideDelay: 0,
    }
  });
});
