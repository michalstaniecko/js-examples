class navMobile {
	constructor() {
		this.bindClick();
	}

	bindClick() {
		$('.nav-toggler-x').on('click', ()=> {
			this.closeMenu();
		});
		$('.nav-toggler').on('click', ()=> {
			$('.nav-mobile').addClass('open');
		});
		$('.nav-mobile a').on('click', () => {
			this.closeMenu();
		});
	}

	closeMenu() {

		$('.nav-mobile').removeClass('open');
	}
}

new navMobile();