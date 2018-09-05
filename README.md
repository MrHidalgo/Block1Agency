# Block1 Agency

#### [block1agency.surge.sh](http://block1agency.surge.sh/)

## How to start
* `npm i || yarn` - install npm dependencies
* `bower install` - install bower packages
* `gulp` - run dev-server

## Tasks
Task name | Description                                                      
:---|:---
`build` | build production-ready project
`clean` | remove `./dest` folder
`default` | will start all tasks required by project in dev mode
`fonts` | copy fonts files `*.{ttf,eot,woff,woff2,svg}` to `./dest` path
`img` | optimize, compress and clone images
`js` | creating and combining logic files info one files => `app.js`
`pug` | interpreted or compiled into `*.html`
`scss` | interpreted or compiled into `*.css`
`spritePNG` | create `*.svg` sprites
`spriteSVG` | create `*.png` sprites
`vendorScript` | `*.js` generation of additional libraries used in one file
`vendorStyle` | `*.css` generation of additional libraries used in one file
`vendorFont` | `*.{eot,svg,ttf,woff,woff2}` copy files to `./dest` path

## NPM script
* `npm run start` - run dev-server, same as `gulp`
* `npm run build` - build project from sources, same as `gulp build`
* `npm run clean` - run task for delete destination folder, same as `gulp clean`
* `npm run deploy` - deploy files => `domainName.surge.sh`

## Libraries & packages used by default:
- Normalize-css;
- css-hamburgers;
- object-fit-images;
- bower-webfontloader;
