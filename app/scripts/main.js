$(document).ready(function() {
	$(document).foundation();

	window.sr = ScrollReveal({
		'distance': '40px',
		'reset': true
	});

	sr.reveal('.sr-1', {'origin': 'left'});
	sr.reveal('.sr-2', {'origin': 'top', 'delay': 200});
	sr.reveal('.sr-3', {'origin': 'bottom', 'delay': 400});
	sr.reveal('.sr-4', {'origin': 'top'});
	sr.reveal('.sr-5', {'origin': 'top', 'delay': 200});
	sr.reveal('.sr-6', {'origin': 'bottom', 'delay': 200});
	sr.reveal('.sr-7', {'origin': 'top', 'delay': 400});
	sr.reveal('.sr-8', {'origin': 'bottom', 'delay': 400});
	sr.reveal('.sr-9', {'origin': 'top', 'delay': 600});
	sr.reveal('.sr-10', {'origin': 'bottom', 'delay': 600});
	sr.reveal('.sr-11', {'origin': 'right', 'delay': 700});
	sr.reveal('.sr-12', {'origin': 'left'});
	sr.reveal('.sr-13', {'origin': 'right', 'delay': 200});
	sr.reveal('.sr-14', {'origin': 'right', 'delay': 300});
	sr.reveal('.sr-15', {'origin': 'top'});
	sr.reveal('.sr-16', {'origin': 'bottom'});
	sr.reveal('.sr-17', {'origin': 'right'});
	sr.reveal('.sr-18', {'origin': 'left', 'delay': 200});
	sr.reveal('.sr-19', {'origin': 'right', 'delay': 200});
	sr.reveal('.sr-20', {'origin': 'left', 'delay': 400});
	sr.reveal('.sr-21', {'origin': 'right', 'delay': 400});
	sr.reveal('.sr-22', {'origin': 'left', 'delay': 600});
	sr.reveal('.sr-23', {'origin': 'right', 'delay': 600});
	sr.reveal('.sr-24', {'origin': 'right', 'delay': 200});
	sr.reveal('.sr-25', {'origin': 'left', 'delay': 200});
	sr.reveal('.sr-26', {'origin': 'left', 'delay': 300});
	sr.reveal('.sr-27', {'origin': 'right', 'delay': 200});
	sr.reveal('.sr-28', {'origin': 'left', 'delay': 200});
	sr.reveal('.sr-29', {'origin': 'left', 'delay': 300});
	sr.reveal('.sr-30', {'origin': 'right', 'delay': 200});
	sr.reveal('.sr-31', {'origin': 'left', 'delay': 200});
	sr.reveal('.sr-32', {'origin': 'left', 'delay': 300});
	sr.reveal('.sr-33', {'origin': 'right', 'delay': 200});
	sr.reveal('.sr-34', {'origin': 'left', 'delay': 200});
	sr.reveal('.sr-35', {'origin': 'left', 'delay': 300});
	sr.reveal('.sr-36', {'origin': 'left'});
	sr.reveal('.sr-37', {'origin': 'right', 'delay': 200});

	// Smooth scrolling for topbar link
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
});
