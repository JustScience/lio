var ready;
ready = function() {

	var $frame = $('#feature-project-frame'),
		$aside = $('.feature-projects-aside'),
		$project = $('.featured-projects .project-thumb'),

		featuredTL = new TimelineMax();

	featuredTL
		.from($aside, 0.4, {x:-240, ease: Power0.easeInOut})
		.staggerFrom($project, 0.3, {scale:1.2, y:60, autoAlpha:0, ease: Power0.easeInOut}, 0.5)
	;

	var featuredCtrl = new ScrollMagic.Controller();
	var	featuredScene = new ScrollMagic.Scene({
			triggerElement: $frame,
			triggerHook: 0.55,
			duration: '45%'
		})
		.setTween(featuredTL)
		.addTo(featuredCtrl)
	;

	$step.mouseenter(function(){
	}).mouseleave(function(){
	});

};

$(document).ready(ready);
$(document).on('page:load', ready);
