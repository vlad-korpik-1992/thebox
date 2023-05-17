/* Header fixed */
$(function() {
	let header = $('.header');
	let hederHeight = header.height();
	$(window).scroll(function() {
	  let height = $(window).scrollTop();
	  if($(this).scrollTop() > 1) {
	  	header.addClass('header--fixed');
	  	} else {
	   		header.removeClass('header--fixed');
	  	}
	});
});
$(document).ready(function() {
	$('.about__btn__link').on('click', function (e) {
        e.preventDefault();
        $('.about__inner__hidden').addClass('about__inner__show');
		$('.about__inner__show').removeClass('about__inner__hidden');
		$('.about__btn').remove();
	});
})