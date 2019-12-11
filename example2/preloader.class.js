class Preloader {
	constructor() {
		$(window).on('load', () => {
			$('.preloader').addClass('hide');
		});
	}
}

new Preloader();