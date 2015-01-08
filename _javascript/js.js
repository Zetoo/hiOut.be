// JavaScript Document
//le transition
window.onload = function() {
	$('body').delay(00).queue(function(){
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
	
//le slider

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
