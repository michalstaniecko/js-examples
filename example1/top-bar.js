class TopBar {
	constructor() {
		var waypoint = new Waypoint({
			element: document.getElementById('page-wrapper'),
			handler: function(direction) {
				$('#topbar').toggleClass('scrolled', direction==='down');
			},
			offset: -15
		});
	}
}

new TopBar();