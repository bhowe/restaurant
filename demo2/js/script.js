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
			var headerUpper = $('.main-header .header-upper').height();
			var headerMenu = $('.main-header .header-upper .main-menu').height();
			var ReqHeight = headerUpper-headerMenu;
			var windowpos = $(window).scrollTop();
			
			if (windowpos >= ReqHeight) {
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
			$('.main-header .mobile-nav-btn').toggleClass('active');
		});
		$('.mobile-nav .close-nav').on('click', function() {
			$('.mobile-nav').removeClass('nav-visible');
			$('.main-header .mobile-nav-btn').toggleClass('active');
		});
		
		//Custom Scroll for Sidebar
		$('.mobile-nav .inner').mCustomScrollbar();
		
	}
	
	//Main Banner Height
	function mainBannerHeight() {
		var windowH = $(window).height();
		$('.main-banner .banner-inner').css('height',windowH+150);
	}
	
	mainBannerHeight();
	
	//Banner Content Scroll
	function bannerContentScroll() {
		if($('.main-header').length){
			var bannerContent = $('.main-banner .banner-content');
			var windowHeight = $(window).height();
			var docScroll = $(window).scrollTop();
			
			if (windowHeight >= 620) {
				$(bannerContent).css('margin-top',docScroll);
			}
			if (docScroll >= 320) {
				$(bannerContent).css('margin-top',320 );
			}
			if (windowHeight < 620) {
				$(bannerContent).css('margin-top',50);
			}
		}
	}

	bannerContentScroll();
	
	//Parallax Background
	if($('.parallax-background').length){
		$('.parallax-background').parallax("10%", 0.3);
	}
	
	//Gallery Carousel
	if ($('.gallery-carousel').length) {
		$('.gallery-carousel').owlCarousel({
			loop:true,
			mouseDrag:true,
			margin:3,
			nav:true,
			smartSpeed: 500,
			autoplay: false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:5
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


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		bannerContentScroll();
	});
	

/* ==========================================================================
   When window is Resized, do
   ========================================================================== */

	$(window).on('resize', function() {
		mainBannerHeight();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
		mainBannerHeight();
	});



})(window.jQuery);
