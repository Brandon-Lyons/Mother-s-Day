$(document).ready(function(){
	$('.carousel').carousel();
	 $("#Carousel").swiperight(function() {
      $("#Carousel").carousel('prev');
    });
   $("#Carousel").swipeleft(function() {
      $("#Carousel").carousel('next');
   });
};)