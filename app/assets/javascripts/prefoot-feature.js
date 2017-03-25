var ready;
ready = function() {

	var $prefoot = $('.prefoot-feature'),
		$img = $('.prefoot-feature img'),

		prefootTL = new TimelineMax();

	prefootTL
		.from($img, 0.3, {autoAlpha:0, y:120, ease: Power0.easeNone})
	;

	var prefootCtrl = new ScrollMagic.Controller();
	var	prefootScene = new ScrollMagic.Scene({
			triggerElement: $prefoot,
			triggerHook: 0.8,
			duration: '50%'
		})
		.setTween(prefootTL)
		.addTo(prefootCtrl)
	;

	// $step.mouseenter(function(){
	// }).mouseleave(function(){
	// });

};

$(document).ready(ready);
$(document).on('page:load', ready);
