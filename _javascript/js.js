// JavaScript Document
//le transition
window.onload = function() {
	$('body').delay(5000).queue(function(){
		  $('.loader-overlay').removeClass('hidden').clearQueue();
		  $('.loader').addClass('quit-loader').clearQueue();
		  $('.accueil').addClass('start-accueil').clearQueue();
});
	$('html').delay(5100).queue(function(){
		  $('body').css('overflow' , 'visible').clearQueue();
	});
};
		
// le scroll
$(document).ready(function() {
		$('.scrollTo').click( function() {
			var page = $(this).attr('href');
			var speed = 800;
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
			return false;
		});
	});
	
//le slide up
jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
});