class MobilePush {
	constructor() {
		this.toggler = '.mobile-push-icon-wrapper';
		this.wrapper = '.mobile-push-wrapper';
		this.section = '.section';
		this.bindClick();
	}

	bindClick() {
		$(this.toggler).on('click', (e) => {
			var _wrapper =  $(e.target).closest(this.wrapper);
			var wrapperIsOpen = $(e.target).closest(this.wrapper).hasClass('animate-mobile-push');
			if (wrapperIsOpen) {
				this.hideAll();
				return false;
			}
			this.hideAll();
			$(e.target).closest(this.wrapper).addClass('animate-mobile-push');
			if ($(e.currentTarget).data('bg_push'))
				$(e.target).closest(this.section).addClass('animate-mobile-push-container');
		});
	}

	hideAll() {
		$('.animate-mobile-push').removeClass('animate-mobile-push');
		$('.animate-mobile-push-container').removeClass('animate-mobile-push-container');
	}
}

new MobilePush();