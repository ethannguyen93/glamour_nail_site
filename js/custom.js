var smallHeaderSize = 61;
var padding = 70;
$('#list-service-link').click(function() {
  $('html,body').animate({
    scrollTop: $("#service-list").offset().top - smallHeaderSize
  }, 'slow');
});

$('#about-us-link').click(function() {
  $('html,body').animate({
    scrollTop: $("#about-us").offset().top - smallHeaderSize - padding
  }, 'slow');
});

$('#contact-us-link').click(function() {
  $('html,body').animate({
    scrollTop: $("#contact-us").offset().top - smallHeaderSize - padding
  }, 'slow');
});