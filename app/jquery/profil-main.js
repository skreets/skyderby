

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

  $('body').on('click', '.burger', function() {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('active');
  });
});
