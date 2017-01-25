var ready;
ready = function() {

	$('a, .btn, .btn-primary, .btn-secondary, .btn-primary-ghost, .btn-secondary-ghost, .navbar-burger').rippleria({
	  duration: 750,
	  easing: 'ease-in-out',
	  detectBrightness: true
	});

};

$(document).ready(ready);
$(document).on('page:load', ready);
