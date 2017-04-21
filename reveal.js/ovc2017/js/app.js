(function () {

	// monkeypatch layout() to enable calculating slide size without backgroundCaption
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