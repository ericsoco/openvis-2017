#!/bin/bash

if [ ! -d "reveal.js" ]; then
	git clone https://github.com/hakimel/reveal.js.git
	cd reveal.js
	npm install
fi
