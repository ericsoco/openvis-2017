# openvis-2017
Data as a Creative Constraint: Eric Socolofsky, OpenVis Conf 2017

## Building
Sorry, this is messy! ....

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
cp -r ./reveal.temp.js ./reveal.js
rm -rf ./reveal.temp.js
```

#### Step 3.
Enable monkeypatching of Reveal.js.  
In `./reveal.js/js/reveal.js`, replace every `layout()` call with `Reveal.layout()`.  
This exposes `layout()` for monkeypatching by `./ovc2017/js/app.js`.

#### Step 4.
Run from the root folder of the project with
```
npm start
```

## Deploying
```
cp ./reveal.js/.gitignore-gh-pages ./reveal.js/.gitignore
npm run gh-deploy
cp ./reveal.js/.gitignore-master ./reveal.js/.gitignore
```