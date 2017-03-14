var ready;
ready = function() {

	var $process = $('.process-hero'),
		$step = $('.process-step'),

		processTL = new TimelineMax();

	processTL
		.staggerFrom($step, 0.3, {autoAlpha:0, x:120, ease: Power0.easeNone}, 0.2)
	;

	var processCtrl = new ScrollMagic.Controller();
	var	processScene = new ScrollMagic.Scene({
			triggerElement: $process,
			triggerHook: 0.95,
			duration: '30%'
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
