$(function() {
	$('.banner span').hover(function() {
		clearInterval(banner_timer);

		banner(this);
	}, function() {
		banner_index = $(this).index() + 1;
		banner_timer = setInterval(banner_fn, 1000);
	});

	var banner_index = 1;

	var banner_timer = setInterval(banner_fn, 1000);

	function banner(obj) {
		$('.banner span.active').removeClass('active');
		$('.banner span').eq($(obj).index()).addClass('active');
		$('.banner li.active').removeClass('active');
		$('.banner li').eq($(obj).index()).addClass('active');
	}

	function banner_fn() {
		if (banner_index > 2) {
			banner_index = 0;
		}

		banner($('.banner span').eq(banner_index).get(0));

		banner_index++;
	}
});