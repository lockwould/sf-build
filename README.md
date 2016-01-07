##Gulp workflow [![Build Status](https://travis-ci.org/mohamdio/gulp-workflow.svg?branch=master)](https://travis-ci.org/mohamdio/gulp-workflow)
An organized front-end workflow for your next project using gulp.
* [Features](https://github.com/mohamdio/gulp-workflow#features)
* [Gulp Tasks Structure](https://github.com/mohamdio/gulp-workflow#gulp-tasks-structure)
* [Getting Started](https://github.com/mohamdio/gulp-workflow#getting-started)
* [Folders Structure](https://github.com/mohamdio/gulp-workflow#folders-structure)
* [Configuration & Paths](https://github.com/mohamdio/gulp-workflow#configuration--paths)
* [License](https://github.com/mohamdio/gulp-workflow#license)

##Features
- Organized & splitting tasks files
- Using gulp-load-plugins
- Define tasks options & paths from one file
- Using bower to get dependencies
- Preview server with BrowserSync
- Cleans up file directories
- Plumber to handle gulp exceptions
- Sourcemaps for sass & js
- Sass compile with docs
- Js browserify & uglify
- Nunjucks templates
- Automagically inject css/js files
- Prettify html files
- Image optimization
- Generate favicons
- Concat css/js files
- & more, take a look at the gulp plugins used in [package.json](https://github.com/mohamdio/gulp-workflow/blob/master/package.json)

##Gulp Tasks Structure
This is gulp folder structure:
- `config.js` file : to define tasks options
- `paths.js` file : to define all paths for tasks
- `base` folder : contain base tasks
- `default` folder : contain common tasks for development
- `build` folder : contain build tasks for production

```
gulp
├── config.js
├── paths.js
└── tasks
    ├── base
    │   ├── bower.js
    │   ├── clean.js
    │   ├── serve.js
    │   └── watch.js
    ├── build
    │   ├── css.js
    │   ├── fonts.js
    │   ├── html.js
    │   ├── images.js
    │   └── scripts.js
    └── default
        ├── fonts.js
        ├── images.js
        ├── nunjucks.js
        ├── sass.js
        └── scripts.js
```

##Getting Started
1. Install [Node.js](https://nodejs.org/)
2. Install [Gulp](http://gulpjs.com/) & [bower](http://bower.io/)
```
npm install -g gulp bower
```
3. 

##Folders Structure

##Configuration & Paths

##License
The code is available under the [MIT License](https://github.com/mohamdio/gulp-workflow/LICENSE).