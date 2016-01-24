$(function() {
	var banner_index = 1;

	setInterval(banner, 1000);

	function banner() {
		if (banner_index > 2) {
			banner_index = 0;
		}

		$('.banner li.active').removeClass('active');
		$('.banner li').eq(banner_index).addClass('active');

		banner_index++;
	}

	$('.banner .top').click(function() {

		var temp = $('.banner li.active').index();

		$('.banner li.active').removeClass('active');

		if (temp - 1 < 0) {
			temp = 3;
		}

		$('.banner li').eq(temp - 1).addClass('active');

		banner_index = temp - 1;
	});

	$('.banner .bottom').click(function() {

		var temp = $('.banner li.active').index();

		$('.banner li.active').removeClass('active');

		if (temp + 1 > 2) {
			temp = -1;
		}

		$('.banner li').eq(temp + 1).addClass('active');

		banner_index = temp + 1;
	});
});