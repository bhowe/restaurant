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
			
			if (windowpos >= 100) {
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
	if($('.mobile-nav').length){
		$('.main-header .mobile-nav-btn').on('click', function() {
			$('.mobile-nav').toggleClass('nav-visible');
		});
		$('.mobile-nav .close-nav').on('click', function() {
			$('.mobile-nav').removeClass('nav-visible');
		});
		
		//Custom Scroll for Sidebar
		$('.mobile-nav .inner').mCustomScrollbar();
		
	}
	
	//Main Slider
	if ($('.image-slider').length) {
		$('.image-slider').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			mouseDrag:false,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	
	//Main Slider Height
	function mainSliderHeight() {
			var windowH = $(window).height();
			$('.main-slider .image-slider .slide-item').css('height',windowH-84);
	}
	
	mainSliderHeight();
	

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
		mainSliderHeight();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
		mainSliderHeight();
	});



})(window.jQuery);
