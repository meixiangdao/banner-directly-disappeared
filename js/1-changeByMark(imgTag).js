$(function() {

	$('.banner span').hover(function() {
		clearInterval(banner_timer);

		banner_fn(this);
	}, function() {
		banner_index = $(this).index() + 1;
		banner_timer = setInterval(banner, 1000);
	});

	var banner_index = 1;

	var banner_timer = setInterval(banner, 1000);

	function banner() {
		if (banner_index > 2) {
			banner_index = 0;
		};

		banner_fn($('.banner span').eq(banner_index).get(0));

		banner_index++;
	}

	function banner_fn(obj) {
		$('.banner span.active').removeClass('active');
		$('.banner span').eq($(obj).index()).addClass('active');
		$('.banner img.active').removeClass('active');
		$('.banner img').eq($(obj).index()).addClass('active');
	}
});