import {player} from "./player";

class HeroScene {
	constructor() {
		this.heroSceneContainer = '.js-hero-scene__swiper-container';
	}

	initSlider() {
		var isOneSlide = $('.c-hero-scene__slider').length > 1;
		var swipeOptions = {};
		if (!isOneSlide) {
			swipeOptions = {
				loop: false,

				on: {
					init: () => {
						$(document).ready(() => {
							player.playVideo('active', true);
						});
					},
					transitionEnd: () => {

					},
					slideChange: () => {
					},
					slideNextTransitionEnd: () => {

						//player.pauseVideo('prev');
					},
					slidePrevTransitionEnd: () => {

						//player.pauseVideo('next');
					},
					slideChangeTransitionStart: () => {
						player.playVideo('active');
						player.pauseVideo('prev');
						player.pauseVideo('next');
					}
				}
			}
		} else {

			swipeOptions = {
				/*effect: 'cube',
							grabCursor: true,
							cubeEffect: {
								shadow: true,
								slideShadows: true,
								shadowOffset: 20,
								shadowScale: 0.94,
							},*/
				autoplay: {
					delay: 3000,
				},
				loop: true,
				on: {
					init: () => {
						$(document).ready(() => {
							player.playVideo('active', true);
						});
					},
					transitionEnd: () => {

					},
					slideChange: () => {
					},
					slideNextTransitionEnd: () => {

						//player.pauseVideo('prev');
					},
					slidePrevTransitionEnd: () => {

						//player.pauseVideo('next');
					},
					slideChangeTransitionStart: () => {
						player.playVideo('active');
						player.pauseVideo('prev');
						player.pauseVideo('next');
					}
				}
			}
		}

		this.heroSceneSlider = new Swiper(this.heroSceneContainer, swipeOptions);
	}

	initPlayer() {
	}
}

var heroScene = new HeroScene();

heroScene.initSlider();