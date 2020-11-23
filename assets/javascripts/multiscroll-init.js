$(document).ready(function () {
	if ($(window).width() <= 768) {
		$("html").toggleClass("no-multiscroll");
		return false;
	}

	$('#multiscroll').multiscroll({
		scrollingSpeed: 1500,
		easing: 'easeOutQuint',
	});
});