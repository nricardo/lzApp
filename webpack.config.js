var path = require('path');
var glob = require('glob');

// get list of modules and their files and
// create an object with all entry points
var entries = { lzapp: 'bootstrap.js' };

var modules = glob.sync('*', { cwd: 'src/modules' });
modules.map(function(module) {
  var files = glob.sync('modules/'.concat(module, '/**'), { cwd: 'src', nodir: true });
	entries[module] = files;
});

module.exports = {
	// define the tool used
	// on development to aid debugging
	devtool: 'source-map',

	// entry point
	context: path.join(__dirname, 'src'),
	entry: entries,

	// output definition
	output: {
		publicPath: 'js/',
		filename: '[name].js',
		path: path.join(__dirname, 'public/js')
	},

	// loaders definitions
	module: {
		loaders: [
			// transpiles ES6 into vanilla ES5 code
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
		    query: {
		      stage: 1
		    }
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
				loaders: ['style', 'css', 'sass']
			},

			// loads up images
			{ test: /\.jpg$/,	loader: 'file' },
			{ test: /\.png$/,	loader: 'url', query: { limit: 8192, mimetype: 'image/png' }, exclude: '/^http:/' },

	    // needed by bootstrap's
	    /*
	    { test: /\.eot$/,    loader: 'file' },
	    { test: /\.svg$/,    loader: 'url?limit=8192&mimetype=image/svg+xml' },
	    { test: /\.ttf$/,    loader: 'url?limit=8192&mimetype=application/octet-stream' },
	    */
	    { test: /\.woff2?$/, loader: 'url?limit=8192&mimetype=application/font-woff' }
	  ]
	},

	// resolvers definitions
	resolve: {
		root: path.join(__dirname, 'src'),
		modulesDirectories: ['node_modules']
	}
}
