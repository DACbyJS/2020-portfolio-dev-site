$(document).ready(function () {
	if ($(window).width() <= 768) {
		$("html").toggleClass("no-multiscroll");
		return false;
	}

	$('#multiscroll').multiscroll({
		scrollingSpeed: 1000,
		easing: 'easeOutSine',
		paddingTop: '78px'
	});
});