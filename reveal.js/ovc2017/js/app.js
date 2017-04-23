(function () {

	// monkeypatch layout() to enable calculating slide size without backgroundCaption
	// NOTE: for this monkeypatch to work, reveal.js must be modified:
	//		 change all `layout()` calls to `Reveal.layout()`
	var revealLayout = Reveal.layout;
	Reveal.layout = function () {
		slides = Array.prototype.slice.call( document.querySelectorAll( '.reveal .slides section' ) );

		for( var i = 0, len = slides.length; i < len; i++ ) {
			var slide = slides[ i ],
				backgroundCaption = slide.querySelector('.background-caption');
			if (backgroundCaption) backgroundCaption.style.display = 'none';
		}

		revealLayout();

		for( var i = 0, len = slides.length; i < len; i++ ) {
			var slide = slides[ i ],
				backgroundCaption = slide.querySelector('.background-caption');
			if (backgroundCaption) backgroundCaption.style.display = 'block';
		}

		// copy .slides style (calculated by reveal.js::layout()) to .backgrounds div,
		// to ensure scale is enforced on slide backgrounds as well.
		// this allows the use of `data-background-image` for full-bleed background images,
		var slidesStyle = document.querySelector('.slides').style,
			backgroundsDiv = document.querySelector('.backgrounds');
		backgroundsDiv.style.width = slidesStyle.width;
		backgroundsDiv.style.height = slidesStyle.height;
		backgroundsDiv.style.left = slidesStyle.left;
		backgroundsDiv.style.top = slidesStyle.top;
		backgroundsDiv.style.bottom = slidesStyle.bottom;
		backgroundsDiv.style.right = slidesStyle.right;
		backgroundsDiv.style.transform = slidesStyle.transform;
	}

	Reveal.addEventListener( 'slidechanged', function( event ) {

		/*
		// position background caption at bottom of slide
		var backgroundCaption = event.currentSlide.querySelector('.background-caption');
		if (backgroundCaption) backgroundCaption.style.top = event.currentSlide.style.top;
		*/

	});

	/*
	// install flowplayer into selected container
	var container = document.getElementById('flv01');
	flowplayer(container, {
		clip: {
			sources: [{
				type: 'video/flash',
				src: 'http://transmote.com/talks/uq-teaser.flv'
			}]
		}
	});
	*/

})();