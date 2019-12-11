import {playVideo} from "./play-video.class";


class FullPage {
	constructor() {
		this.video = document.getElementById('video-magnat');
		this.init();
		this.menu();
	}

	init() {
		$(document).ready(() => {
			$('#home').fullpage({
				licenseKey: '23B05071-4E984576-B168DC66-6B740D72',
				menu: '#anchors',
				scrollBar: true,
				anchors: [
					'film',
					'smaki',
					'wisniowy-z-nuta-rumu',
					'porzeczkowy-z-nuta-whisky',
					'cytrynowo-pigwowy',
					'malinowo-cytrynowy',
					'gruszkowy-z-nuta-wanilii',
					'czysta',
					'kontakt',
					'stopka'
				],

				onLeave: (origin, destination, direction) => {

					if (origin.index == 0) {
						$('.section1')
							.addClass('animate')
							.find('.overflow-container')
							.removeClass('animate');
					}
					if (destination.index == 0) {
						$('.hero.main').removeClass('animate');
						if ($('.video-background').hasClass('open'))
							this.video.play();
					}
					$(origin.item).find('.overflow-container').removeClass('animate');
					$(origin.item).find('.bg').removeClass('animate');
					$(destination.item).find('.bg').addClass('animate');
					$(destination.item).find('.overflow-container').addClass('animate');

					this.activeMenu(destination.index);

					this.logoReplace(destination.index);
				},

				afterRender: () => {
				},

				afterLoad:  (origin, destination, direction) => {
					if (destination.index == 0) {
						$(document).ready(() => {
							$('.section1')
								.find('.overflow-container')
								.addClass('animate');
							//playVideo();
						});
					} else {

					}
				}
			});

		});
	}

	logoReplace(slideId) {
		if (slideId == 7) {
			$('.logo--std').addClass('hide');
			$('.logo--alt').removeClass('hide');
		} else {

			$('.logo--alt').addClass('hide');
			$('.logo--std').removeClass('hide');
		}
	}

	activeMenu(slideId) {
		let $link = $('nav li a, .nav-mobile a');
		$link.removeClass('active');
		if (slideId < 7) {
			$('nav li').eq(0).find('a').addClass('active');
			$('.nav-mobile li').eq(0).find('a').addClass('active');
		}
		if (slideId == 7) {
			$('nav li').eq(1).find('a').addClass('active');
			$('.nav-mobile li').eq(1).find('a').addClass('active');
		}
		if (slideId == 8) {
			$('nav li').eq(2).find('a').addClass('active');
			$('.nav-mobile li').eq(2).find('a').addClass('active');
		}
	}

	menu() {
		$('a').on('click', (e) => {
			if ($(e.target).data('href').length) {
				let href = $(e.target).data('href');
				$.fn.fullpage.silentMoveTo(href);
				e.preventDefault();
			}
		});

	}


	sectionAnimate() {

	}
}

new FullPage();