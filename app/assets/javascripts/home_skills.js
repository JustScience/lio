var ready;
ready = function() {

	var $skills = $('#skills-lists'),
		$skill = $('.skills-list li'),

		homeSkillsTL = new TimelineMax();

	homeSkillsTL
		.staggerFrom($skill, 2, {scale:1.3,x:-60,y:30,autoAlpha:0,ease:Back.easeInOut},0.4)
	;

	var homeSkillsCtrl = new ScrollMagic.Controller();
	var	homeSkillsScene = new ScrollMagic.Scene({
			triggerElement: $skills,
			triggerHook: 0.8,
			duration: '60%'
		})
		.setTween(homeSkillsTL)
		.addTo(homeSkillsCtrl)
	;

	$skill.mouseenter(function(){
		TweenLite.to(this,0.3,{scale:1.05, ease: Power3.easeInOut});
		$(this).children('.skill-level').css('width', this.dataset.level + '%');
	}).mouseleave(function(){
		TweenLite.to(this,0.3,{scale:1, ease: Power3.easeInOut});		
	});

};

$(document).ready(ready);
$(document).on('page:load', ready);
