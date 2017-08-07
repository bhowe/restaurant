(function($) {

	"use strict";


	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var scrollCLickLink = $('.scroll-to-top');
			var MainHeader = $('.main-header');
			var windowpos = $(window).scrollTop();
			
			if (windowpos >= 200) {
				MainHeader.addClass('fixed-header');
				scrollCLickLink.fadeIn(300);
			} else {
				MainHeader.removeClass('fixed-header');
				scrollCLickLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//Mobile Menu Toggle
	if($('.main-header .main-menu .nav-toggler').length){
		$('.main-header .main-menu .nav-toggler').on('click', function() {
			$('.navbar-outer').slideToggle(500);
		});
	}
	
	
	//Image Carousel
	if ($('.image-slider').length) {
		$('.image-slider').bxSlider({
			adaptiveHeight: true,
			auto:true,
			mode:'fade',
			controls: true,
			prevText  : "<span class='fa fa-angle-left'></span>",
			nextText  : "<span class='fa fa-angle-right'></span>",
			pause: 5000,
			speed: 750,
			pager:true
		});		
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);

		});
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
	});
	

/* ==========================================================================
   When window is Resized, do
   ========================================================================== */

	$(window).on('resize', function() {
		
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
	});



})(window.jQuery);
