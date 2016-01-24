$(function() {

	var banner_index = 1;

	setInterval(banner, 1000);

	function banner() {
		if (banner_index > 2) {
			banner_index = 0;
		}

		$('.banner img.active').removeClass('active');
		$('.banner img').eq(banner_index).addClass('active');

		banner_index++;
	}

	$('.banner .right').click(function() {
		var temp = $('.banner img.active').index();
		$('.banner img.active').removeClass('active');

		if (temp + 1 > 2) {
			temp = -1;
		}

		$('.banner img').eq(temp + 1).addClass('active');

		banner_index = temp + 1;
	});

	$('.banner .left').click(function() {
		var temp = $('.banner img.active').index();
		$('.banner img.active').removeClass('active');

		if (temp - 1 < 0) {
			temp = 3;
		}

		$('.banner img').eq(temp - 1).addClass('active');

		banner_index = temp - 1;
	});

});