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
- Install [Node.js](https://nodejs.org/)
- Install [Gulp](http://gulpjs.com/) & [bower](http://bower.io/) globally 
```
npm install -g gulp bower
```
- In terminal/command line, `cd` into your project directory
- Clone this workflow 
```
git clone https://github.com/mohamdio/gulp-workflow.git
```
- Clone [source folder structure](https://github.com/mohamdio/gulp-source-structure) 
```
git clone https://github.com/mohamdio/gulp-source-structure.git
```
- Install Gulp dependencies 
```
npm install
```
- Install front-end/bower dependencies 
```
bower install
```
- After all done installing, you can run tasks
  * `gulp` to run default tasks for development
  * `gulp build` to build your project for production

####Available Tasks
Task Name | Subtasks | Description
--- | --- | ---
`clean` | `clean:cache` - `clean:prod` | clean dest folders (dev & prod) & caches
`bower` | `bower:clean` - `bower:scss` - `bower:js` - `bower:css` - `bower:fonts` | dest all bower dependencies to source folder
`fonts` | --- | copy all fonts to dev folder
`sass` | `sass:compile` - `sass:doc` - `sass:cssRebaseUrl` | compile sass files with docs & rebase css url
`js` | `js:browserify` - `js:copySrc` | browserify js files & copy source js files to dev folder
`images` | `images:minify` - `images:favicons` | minify images & generate favicons
`nunjucks` | `nunjucks:render` - `nunjucks:inject` | render nunjucks files & inject css/js files
`serve` | `serve:prod` | start server & open browser for dev or prod mode
`watch` | --- | start gulp watch for tasks (bower - sass - nunjucks - js)

##Folders Structure

##Configuration & Paths

##License
The code is available under the [MIT License](https://github.com/mohamdio/gulp-workflow/LICENSE).