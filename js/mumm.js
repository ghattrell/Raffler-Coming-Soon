/* =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

	#MUMM | The Splitted Coming Soon
	@Author		   Torros / Madeon08
	@Type          Javascript
	@Last Update   04:57 PM Monday, August 11th, 2014

	TABLE OF CONTENTS
	---------------------------
	 1. Loading
	 2. Countdown
	 3. Carousel
	 4. Multiscroll

=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=* */

/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

$(window).load(function() {
	"use strict";
	
	$('.globload').fadeOut(2000)
	
	setTimeout(function() {
		
		$("header").addClass("fadeIn").removeClass("opacity-0");
		
	}, 200);
	
	setTimeout(function() {
		
		$("#days-animation").addClass("fadeIn").removeClass("opacity-0");
		
	}, 600);
	
	setTimeout(function() {
		
		$("#hours-animation").addClass("fadeIn").removeClass("opacity-0");
		
	}, 800);
	
	setTimeout(function() {
		
		$("#minutes-animation").addClass("fadeIn").removeClass("opacity-0");
		$(".control-video").addClass("slideInDown").removeClass("opacity-0");
		
	}, 1000);
	
	setTimeout(function() {
		
		$("#seconds-animation").addClass("fadeIn").removeClass("opacity-0");
		
	}, 1200);
	
	setTimeout(function() {
		
		$("#subscribe").addClass("fadeIn").removeClass("opacity-0");
		
	}, 3600);

	setTimeout(function() {

		$(".iphone").addClass("fadeIn").removeClass("opacity-0");
		
	}, 3000);

	setTimeout(function() {
		
		$(".introducing").addClass("fadeIn").removeClass("opacity-0");
		
	}, 1600);

	setTimeout(function() {
		
		$(".big-logo").addClass("fadeIn").removeClass("opacity-0");
		
	}, 2200);

	setTimeout(function() {
		
		$(".logo").addClass("fadeIn").removeClass("opacity-0");
		
	}, 3600);

	setTimeout(function() {
		
		$(".footer").addClass("fadeIn").removeClass("opacity-0");
		
	}, 4200);
		
});

window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});
