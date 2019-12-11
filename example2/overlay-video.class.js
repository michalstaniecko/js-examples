export default class OverlayVideo {
	constructor() {

		this.video = document.getElementById('video-magnat');
		this.bindClick();

	}

	youtubeAPI() {

		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// 3. This function creates an <iframe> (and YouTube player)
		//    after the API code downloads.
		var player;
		this.player = player;
		window.onYouTubeIframeAPIReady= () => {
			this.player = new YT.Player('video-overlay-player', {
				width: "640",
				height: "480",
				videoId: 'M7lc1UVf-VE',
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}

		// 4. The API will call this function when the video player is ready.
		function onPlayerReady(event) {
			//event.target.playVideo();
		}

		// 5. The API calls this function when the player's state changes.
		//    The function indicates that when playing a video (state=1),
		//    the player should play for six seconds and then stop.
		var done = false;

		function onPlayerStateChange(event) {

		}

		function stopVideo() {
		}
	}

	bindClick() {
		$('.js-video-overlay-open').on('click', (e) => {
			e.preventDefault();
			$('.video-background').addClass('open');
			this.video.play();
		});


	}
}

new OverlayVideo();