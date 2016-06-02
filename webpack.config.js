// -- import some fs util libs
var path = require('path');
var glob = require('glob');

// -- import webpack plugins
var GlobEntryPlugin = require('./GlobEntryPlugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	// app's source context
	context: path.join(__dirname, 'src'),

	// entry point(s)
	entry: {
		lzApp: 'bootstrap'
	},

	// output definition
	output: {
		publicPath: 'js/',
		filename: '[name].js',
		path: path.join(__dirname, 'public/js')
	},

  // setup plugin's
  plugins: [
    new GlobEntryPlugin('modules'),
    new CommonsChunkPlugin('common.js')
  ],

	// loaders definitions
	module: {
		loaders: [
			// transpiles ES6 into vanilla ES5 code
			{
        test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [ 'ng-annotate', 'babel?stage=1' ]
			},

			// loads HTML templates
			{
	      test: /\.html$/,
	      loader: 'html',
				exclude: /node_modules/
			},

			// loads JSON files
			{
	      test: /\.json$/,
	      loader: 'json',
				exclude: /node_modules/
			},

			// process SASS/SCSS files and loads them
			{
	      test: /\.scss$/,
        loaders: ['style/useable?singleton', 'css', 'postcss', 'sass'],
        exclude: /node_modules/
			},

			// loads up images
			{ test: /\.jpg$/,	loader: 'file' },
			{ test: /\.png$/,	loader: 'url', query: { limit: 8192, mimetype: 'image/png' }, exclude: '/^http:/' },

	    // needed by bootstrap's
	    //{ test: /\.woff2?$/, loader: 'url?limit=8192&mimetype=application/font-woff' }
	  ]
	},

  postcss: function () {
    return [
      // cleans up unused css selectors
      require('usedcss')({
        js:   [ 'src/**/*.js' ],
        html: [
        	'src/**/*.html',
        	'public/index.html'
        ]
      }),

      // auto-prefixes css rules
      require('autoprefixer')
    ]
  },

	// resolver definitions
	resolve: {
		root: path.join(__dirname, 'src'),
		modulesDirectories: ['node_modules']
	}
}
