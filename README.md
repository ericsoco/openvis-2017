# openvis-2017
Data as a Creative Constraint: Eric Socolofsky, OpenVis Conf 2017

## Building

#### Step 1.
Clone and install presentation wrapper
```
git clone git@github.com:ericsoco/openvis-2017.git
cd openvis-2017
npm i
```

#### Step 2.
Install Reveal.js with customizations
```
mv reveal.js reveal.temp.js
git clone git@github.com:hakimel/reveal.js.git
mv -r ./reveal.temp.js ./reveal.js
rm -rf ./reveal.temp.js
```

#### Step 3.
Enable monkeypatching of Reveal.js.  
In `./reveal.js/js/reveal.js`, replace every `layout()` call with `Reveal.layout()`, to expose `layout()` for monkeypatching by `./ovc2017/js/app.js`.
