$(".tlacitko").on("click", function(e) {
	var odkaz = $(this).attr("href");
	var menu = $(".navbar");
	var rychlost = 1.3 * 1000;
	var efekt = "easeInOutSine";
	
	$("html, body").stop().animate( 
		{ scrollTop: $(odkaz).offset().top - menu.height() }, rychlost, efekt);
	
	e.preventDefault();
	
});