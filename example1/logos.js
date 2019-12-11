class Logos {
	constructor() {
		this.logosSliderContainer = '.js-logos__swiper-container';
	}

	initSlider() {
		this.logosSlider = new Swiper(this.logosSliderContainer, {
			slidesPerView: 7,
			loop: true,
			spaceBetween: 10,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			breakpoints: {
				480: {
					slidesPerView: 2
				},
				767: {
					slidesPerView: 3
				},
				991: {
					slidesPerView: 4
				}
			}
		});
	}
}

var logos = new Logos();

logos.initSlider();