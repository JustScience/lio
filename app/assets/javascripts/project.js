var ready;
ready = function() {

	var $feature = $('.js__projectFeature'),
		$img = $('.js__projectFeature div'),
		$text = $('.js__projectFeature .project-show-feature-text'),

		projectFeaturesTL = new TimelineMax();

	projectFeaturesTL
		.from($img, 0.3, {autoAlpha:0, y:-120, ease: Power0.easeNone})
	;

	var projectFeaturesCtrl = new ScrollMagic.Controller();
	var	projectFeaturesScene = new ScrollMagic.Scene({
			triggerElement: $feature,
			triggerHook: 0.9,
			duration: '90%'
		})
		.setTween(projectFeaturesTL)
		.addTo(projectFeaturesCtrl)
	;


};

$(document).ready(ready);
$(document).on('page:load', ready);
