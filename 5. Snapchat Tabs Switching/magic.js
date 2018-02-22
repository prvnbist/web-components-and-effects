var active = $('.active'),
	firstTab = $('.tab:nth-child(1)'),
	secondTab = $('.tab:nth-child(2)'),
	thirdTab = $('.tab:nth-child(3)'),
	yellowBg = $('.yellow'),
	blueBg = $('.blue'),
	snap = $('.snap'),
	sort = $('.sort');

firstTab.on('click', function () {
	active.animate({
		left: '24%'
	});
	secondTab.animate({
		marginTop: '50px'
	});
	yellowBg.animate({
		right: '-100%'
	});
	blueBg.animate({
		left: '0'
	});
	$('.camera').animate({
		left: '17%'
	});
	snap.animate({
		padding: '0 40px 0 40px'
	});
	sort.animate({
		marginLeft: '20px'
	});
});

secondTab.on('click', function () {
	active.animate({
		left: '50%'
	});
	$(this).animate({
		marginTop: '0'
	});
	$('.camera').animate({
		left: '25%'
	});
	yellowBg.animate({
		right: '-100%'
	});
	blueBg.animate({
		left: '-100%'
	});
	snap.animate({
		padding: '0'
	});
	sort.animate({
		marginLeft: '0'
	});
});
thirdTab.on('click', function () {
	active.animate({
		left: '75%'
	});
	secondTab.animate({
		marginTop: '50px'
	});
	$('.camera').animate({
		left: '17%'
	});
	yellowBg.animate({
		right: '0'
	});
	blueBg.animate({
		left: '-100%'
	});
	snap.animate({
		padding: '0 40px 0 40px'
	});
	sort.animate({
		marginLeft: '20px'
	});
});