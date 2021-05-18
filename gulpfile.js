const gulp = require('gulp'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    pkg = require('./package.json'),
    source = require('vinyl-source-stream');

function js(done) {
    console.log("Starting JS Task.......");
    browserify({
        entries: 'js/index.js',
        debug: true
    })
    .on('log', gutil.log)
    .on('error', handleError)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./static'));

    done();
}

function handleError (err) {
	console.log(err.toString())
	process.exit(-1)
  }

exports.default = gulp.series(js);
