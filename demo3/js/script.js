(function($) {

	"use strict";


	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	//Show / Hide Mobile Nav
	if($('.mobile-nav-toggler').length){
		$('.mobile-nav-toggler').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('mobile-nav-visible');
		});
	}
	
	//Mobile Nav Dropdown Toggle
	if($('.mobile-nav .navigation > li.dropdown > a').length){
		
		//Dropdown Button
		$('.mobile-nav .navigation > li.dropdown > a').on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('open');
			$(this).next('ul').slideToggle(500);
		});
	}

	
	//Banner Left Slider
	if ($('.left-slider-box .banner-left-slider').length) {
		$('.left-slider-box .banner-left-slider').owlCarousel({
			animateOut: 'slideOutLeft',
    		animateIn: 'slideInLeft',
			loop:true,
			mouseDrag:false,
			margin:0,
			nav:true,
			smartSpeed: 1500,
			autoplaySpeed: 1500,
			autoplay: true,
			autoplayTimeout:5000,
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
	
	
	//Banner Right Slider
	if ($('.right-slider-box .banner-right-slider').length) {
		$('.right-slider-box .banner-right-slider').owlCarousel({
			animateOut: 'slideOutRight',
    		animateIn: 'slideInRight',
			loop:true,
			mouseDrag:false,
			margin:0,
			nav:true,
			smartSpeed: 1500,
			autoplaySpeed: 1500,
			autoplay: true,
			autoplayTimeout:5000,
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
	
	
	//Banner Mid Slider
	if ($('.mid-slider-box .banner-mid-slider').length) {
		$('.mid-slider-box .banner-mid-slider').owlCarousel({
			animateOut: 'fadeOut',
    		animateIn: 'fadeIn',
			loop:true,
			mouseDrag:false,
			margin:0,
			nav:true,
			smartSpeed: 1500,
			autoplaySpeed: 1500,
			autoplay: true,
			autoplayTimeout:5000,
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
	
	
	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
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


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
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
