// Testacular configuration
// Generated on Wed Oct 10 2012 02:13:44 GMT-0500 (Hora est. Pacífico, Sudamérica)

// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
	MOCHA,
	MOCHA_ADAPTER,
	'lib/jquery-*.js',
	'lib/chai-*.js',
	'spec/*.js',
	'src/*.js'
];

// list of files to exclude
exclude = [
	'spec/feature_spec.js',
	'lib/*.min.js'
];

// test results reporter to use
// possible values: dots || progress
reporter = 'progress';

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['Chrome'];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;