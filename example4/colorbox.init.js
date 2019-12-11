class Lightbox {
	constructor() {
		this.lightbox = '.lightbox';
		this.mobileViewport = '1262px';
		$(this.lightbox).colorbox({
			rel: 'lightbox',
			width: '95%',
			maxWidth: '1262px',
			reposition: true,
			onComplete: () => {
				$(window).on('resize', () => {

				});
				var mobileViewport = window.matchMedia("(max-width: " + this.mobileViewport + ")");
				mobileViewport.addListener((mq) => {
					if (mq.matches) {
						$(window).on('resize', () => {

							$.colorbox.resize({
								width: '95%'
							});
						});
					} else {
						$(window).on('resize', () => {

							$.colorbox.resize({
								width: '1262px'
							});
						});
					}
				});

			}
		});
	}
}

new Lightbox();