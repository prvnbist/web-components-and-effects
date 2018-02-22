$('.menuButton').on('click', function () {
	$(this).toggleClass('active');

	if ($(this).hasClass('active')) {
		$('ul').css('height', '250px');
	} else {
		$('ul').css('height', '50px');
	}

	$('i').toggleClass('icon');
	$('p').toggleClass('link');
});