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

		// position background caption at bottom of slide
		var backgroundCaption = event.currentSlide.querySelector('.background-caption');
		if (backgroundCaption) backgroundCaption.style.top = event.currentSlide.style.top;

	});

})();