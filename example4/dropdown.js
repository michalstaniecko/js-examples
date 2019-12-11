class DropdownMenu {
	constructor() {
		this.dropdownMenuList = '.dropdown-nav__list';
		this.dropdownMenuToggler = '.js-dropdown-nav__list-toggler';

		this.bindEvents();
	}

	bindEvents() {
		$(this.dropdownMenuToggler).on('click', (e) => {
			var $currentList = $(e.currentTarget)
				.closest('h2')
				.next();
			if (!$currentList.hasClass('slide-in')) {
				this.openDropdownList($currentList);

			} else {
				this.closeDropdownList($currentList);

			}
		});
	}

	openDropdownList($list) {
		this.closeDropdownList($('.slide-in'));
		$list
			.closest('div')
			.addClass('dropdown-nav--active');
		$list
			.slideDown(400, () => {
				$list
					.addClass('slide-in')
					.css('display', '')
			});
	}

	closeDropdownList($list) {
		$('.dropdown-nav--active').removeClass('dropdown-nav--active');
		$list
			.slideUp(400, () => {
				$list
					.removeClass('slide-in')
					.css('display', '');
			});
	}
}

new DropdownMenu();