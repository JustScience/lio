var ready;
ready = function() {

	var $hero = $('#home-hero-1'),
		$phone = $('#ux-hero-phone'),
		$tablet = $('#ux-hero-tablet'),
		$laptop = $('#ux-hero-laptop'),
		$desktop = $('#ux-hero-desktop'),
		$headshot = $('.hero-headshot'),
		$quote = $('.hero-quote'),

		homeHeroTL = new TimelineMax();
	
	homeHeroTL
		.add('scrollOut')
		.to($phone,1.2,{y:-660,x:-1200,ease:Power0.easeInOut},'scrollOut')
		.to($tablet,1.2,{y:-180,x:-1500,ease:Power0.easeInOut},'scrollOut')
		.to($laptop,1.2,{y:-420,x:60,ease:Power0.easeInOut},'scrollOut')
		.to($desktop,1.2,{y:-810,scale:1.1,ease:Power0.easeInOut},'scrollOut')
		.add('devicesOut')
		.fromTo($headshot,1.5,{x:90,autoAlpha:0,ease:Power0.easeIn},{x:0,autoAlpha:1,ease:Power0.easeIn},'scrollOut')		
		.fromTo($quote,1.8,{x:-60,autoAlpha:0,ease:Power0.easeIn},{x:0,autoAlpha:1,ease:Power0.easeIn},'scrollOut')		
		.to($desktop,1.2,{autoAlpha:0,ease:Power0.easeInOut},'devicesOut')
	;

	var homeHeroCtrl = new ScrollMagic.Controller();
	var	homeHeroScene = new ScrollMagic.Scene({
			triggerElement: $hero,
			triggerHook: 0,
			duration: '85%'
		})
		.setTween(homeHeroTL)
		.addTo(homeHeroCtrl)
	;

};

$(document).ready(ready);
$(document).on('page:load', ready);
