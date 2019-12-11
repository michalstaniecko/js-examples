class Scrolling {
	constructor() {
		this.$link = $('.scrolling');
		this.$link.on('click', (e) => {
			e.preventDefault();
			var section = $(e.currentTarget).attr('href');
			this.scrollTo(section);
		});
	}

	scrollTo(section) {
		var sectionTop = $(section).offset().top;
		$('html, body').animate({
			scrollTop: sectionTop,

		});
	}
}

new Scrolling();