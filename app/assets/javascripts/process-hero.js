var ready;
ready = function() {

	var $process = $('.process-hero'),
		$header = $('.section-head h2'),
		$step = $('.process-step'),

		processTL = new TimelineMax();

	processTL
		.from($header, 0.6, {autoAlpha:0, y:-60,delay: 0.6, ease: Power3.easeInOut})
		.staggerFrom($step, 0.3, {autoAlpha:0, x:120, ease: Power0.easeNone}, 0.2)
	;

	var processCtrl = new ScrollMagic.Controller();
	var	processScene = new ScrollMagic.Scene({
			triggerElement: $process,
			triggerHook: 0.95,
			duration: '20%'
		})
		.setTween(processTL)
		.addTo(processCtrl)
	;

	$step.mouseenter(function(){
	}).mouseleave(function(){
	});

};

$(document).ready(ready);
$(document).on('page:load', ready);
