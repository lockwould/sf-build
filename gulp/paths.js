// gulp/paths.js

// base paths
var src    = './source/',
    dist   = './build/',
    dev    = 'dev/',
    prod   = 'prod/',
    assets = 'assets/';

// taks paths
module.exports =
{
	to:
	{
		dist:
		{
			dev: dist + dev,
			prod: dist + prod
		},
		nunjucks:
		{
			config: src + 'templates/',
			src: src + 'templates/*.+(html|nunjucks)'
		},
	}
};