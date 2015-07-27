$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		responsive: 720,
		scrollBar: true
	});

	window.sr = new scrollReveal();

	$('h2').fitText();
	$('h3').fitText();
	$('h4').fitText();
});