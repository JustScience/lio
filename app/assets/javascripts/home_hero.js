var ready;
ready = function() {

	var $hero = $('#home-hero-1'),
		$phone = $('#ux-hero-phone'),
		$tablet = $('#ux-hero-tablet'),
		$laptop = $('#ux-hero-laptop'),
		$desktop = $('#ux-hero-desktop');


	var homeHeroTL = new TimelineMax();
	homeHeroTL
		.add('scrollOut')
		.to($phone,1.2,{y:-660,x:-1200,ease:Power0.easeOut},'scrollOut')
		.to($tablet,1.2,{y:-180,x:-1200,ease:Power0.easeOut},'scrollOut')
		.to($laptop,1.2,{y:-420,x:60,ease:Power0.easeOut},'scrollOut')
		.to($desktop,1.2,{y:-780,ease:Power0.easeOut},'scrollOut')
		.add('shapesOut')
	;

	var homeHeroCtrl = new ScrollMagic.Controller();
	var	homeHeroScene = new ScrollMagic.Scene({
			triggerElement: $hero,
			triggerHook: 0,
			duration: '100%'
		})
		.setTween(homeHeroTL)
		.addTo(homeHeroCtrl)
	;


};

$(document).ready(ready);
$(document).on('page:load', ready);
