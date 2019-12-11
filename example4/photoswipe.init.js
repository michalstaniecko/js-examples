function initPhotoSwipe() {

	var items = [];


	var $lightbox = $('.lightbox');

	$lightbox.each(function () {

		var href = $(this).attr('href');

		var size = $(this).data('size').split('x');

		var title= $(this).data('title') + '<br/><strong>' + $(this).data('desc') + '</strong>';



		if ($(this).data('type') == 'video') {

			var video = ($(this).data('video') !== undefined ? '<div class="pswp--video embed-responsive embed-responsive-16by9"><iframe class="" src="'+ $(this).data('video') +'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>' : '');
			items.push({
				html: video,
				title: title
			});
		} else {

			items.push({
				src: href,
				w: parseInt(size[0], 10),
				h: parseInt(size[1], 10),
				title: title,
			});
		}

	});

	function openPhotoSwipe($el) {

		console.log($el.closest('.grid-item').index());

		var index = $el.closest('.grid-item').index() - 1;

		var pswpElement = document.querySelectorAll('.pswp')[0];

		var options = {
			index: index,
			bgOpacity: 0.8,
			closeOnScroll: false,
			shareEl: false,
			zoomEl: false,
			fullscreenEl: false
		};

		var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

		gallery.init();
	}

	$lightbox.on('click', function (e) {
		e.preventDefault();
		openPhotoSwipe($(e.target));
	});
}

initPhotoSwipe();

