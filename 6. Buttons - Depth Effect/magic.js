var rent = $("li:first-child"),
	sell = $("li:last-child");


rent.on("click", function () {
	if ($(this).hasClass("rent")) {
		$(this).removeClass("rent");
		sell.addClass("sell");
	}
	sell.removeClass("sell");
});
sell.on("click", function () {
	if ($(this).hasClass("sell")) {
		$(this).removeClass("sell");
		rent.removeClass("rent");
	} else {
		$(this).addClass("sell");
		rent.addClass("rent");
	}
});