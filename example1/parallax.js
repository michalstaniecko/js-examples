class Parallax {
	constructor() {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		} else {
			var s = skrollr.init({
				forceHeight: false
			});
		}
	}


}

new Parallax();