$(document).ready(function(){
	 $(".carousel").swiperight(function() {
      $(".carousel").carousel('prev');
    });
   $(".carousel").swipeleft(function() {
      $(".carousel").carousel('next');
   });
});