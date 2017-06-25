var ready;
ready = function() {

	// FEATURE REVEALS
	var $feature = $('.js__projectFeature'),
		$img = $('.js__projectFeature div'),
		$text = $('.js__projectFeature .project-show-feature-text'),

		projectFeaturesTL = new TimelineMax();

	projectFeaturesTL
		.staggerFrom($img, 0.3, {autoAlpha:0, y:-120, ease: Power0.easeNone}, 0.2)
	;

	var projectFeaturesCtrl = new ScrollMagic.Controller();
	var	projectFeaturesScene = new ScrollMagic.Scene({
			triggerElement: $feature,
			triggerHook: 0.9,
			duration: '120%'
		})
		.setTween(projectFeaturesTL)
		.addTo(projectFeaturesCtrl)
	;

	// PRE FOOTER GALLERY
	var $prefoot = $('.prefoot-feature'),
		$img = $('.prefoot-feature div'),

		prefootTL = new TimelineMax();

	prefootTL
		.staggerFrom($img, 0.3, {autoAlpha:0, y:120, ease: Power0.easeNone}, 0.2)
	;

	var prefootCtrl = new ScrollMagic.Controller();
	var	prefootScene = new ScrollMagic.Scene({
			triggerElement: $prefoot,
			triggerHook: 0.9,
			duration: '25%'
		})
		.setTween(prefootTL)
		.addTo(prefootCtrl)
	;

};

$(document).ready(ready);
$(document).on('page:load', ready);
