// gulp/paths.js
'use strict';

// base paths
var src = './source/',
    dist = './build/',
    dev = 'dev/',
    prod = 'prod/',
    assets = 'assets/';

// taks paths
module.exports = {
    to: {
        dist: {
            dev: dist + dev,
            prod: dist + prod
        },
        dev: dev,
        prod: prod,
        nunjucks: {
            config: src + 'templates/',
            src: src + 'templates/*.+(html|nunjucks)',
            watch: src + 'templates/**/*.+(html|nunjucks)' // for watch task not render
        },
        sass: {
            src: src + 'scss/**/*.+(scss|sass)',
            foundation: src + 'bower_components/foundation-sites/scss',
            dist: {
                dev: dist + dev + assets + 'css',
                prod: dist + prod + assets + 'css'
            }
        }
    }
};