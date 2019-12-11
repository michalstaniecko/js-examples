class MainMenu {
	constructor() {
		this.dropdownNav = $('.js-dropdown-nav');
		this.dropdownNavToggler = $('.js-dropdown-nav-toggler');

		this.bindEvents();
	}



	bindEvents() {
		$(window).on('resize', () => {
			var mobileViewport = window.matchMedia("(max-width:991px)");
			if (!mobileViewport.matches) {
				this.dropdownClose()
			}
		});
		this.dropdownNavToggler.on('click', (e) => {
			e.preventDefault();
			this.dropdownToggle();
		});
	}

	dropdownClose() {
		this.dropdownNav.removeClass('active');
	}

	dropdownToggle() {
		this.dropdownNav.toggleClass('active', !this.dropdownNav.hasClass('active'));
	}
}

new MainMenu();