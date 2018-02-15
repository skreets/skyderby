$(document).ready(function(){

  $('body').on('click', '.burger', function() {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('active');
  });

  $('body').on('click', '.section_header_burger', function() {
    $(this).toggleClass('active');
    $('.section_header, .section_header_nav').toggleClass('active');
  });
});
