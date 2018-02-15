$(document).ready(function(){

  $('body').on('click', '.burger', function() {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('active');
  });
});
