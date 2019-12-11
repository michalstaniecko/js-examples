class Preloader {
	constructor() {
		this.preloader = '.preloader';
		this.hide();
	}

	hide() {
		$(window).on('load', () => {
			$(this.preloader).addClass('preloader-hide');
		});
	}
}

new Preloader();