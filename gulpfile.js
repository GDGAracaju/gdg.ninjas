var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var merge = require('gulp-merge');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var less = require('gulp-less');

var mainBowerFiles = require('main-bower-files');
var del = require('del');
var path = require('path');

var tsProject = ts.createProject('tsconfig.json');

var PATH = {
  src: {
    html: 'src/**/*.html',
    ts: 'src/**/*.ts',
    less: 'src/**/*.less',
    libs: {
      systemjs: './node_modules/systemjs/dist/system.src.js',
      angular2: [
        './node_modules/angular2/bundles/angular2.js',
        './node_modules/angular2/bundles/http.js'
      ]
    }
  },
  dest: {
    html: './public',
    ts: './public/js',
    libs: './public/libs',
    less: './public/css'
  }
}

var onError = function(err) {
  hasError = true;
  console.log(err.message);
}

gulp.task('html', function() {
  return gulp.src(PATH.src.html)
    .pipe(gulp.dest(PATH.dest.html));
});

gulp.task('less', function() {
  return gulp.src(PATH.src.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('all.css'))
    .pipe(gulp.dest(PATH.dest.less));
});

gulp.task('libs', function() {
  var systemjs = gulp.src(PATH.src.libs.systemjs).pipe(rename('system.js'));
  var angular2 = gulp.src(PATH.src.libs.angular2);
  var bowerJS = gulp.src(mainBowerFiles({ filter: '**/*.js'})).pipe(concat('bowerJS.js'));
  var bowerCSS = gulp.src(mainBowerFiles({ filter: '**/*.css'})).pipe(concat('bowerCSS.css'));
  return merge([
    systemjs,
    angular2,
    bowerJS,
    bowerCSS
  ])
  .pipe(gulp.dest(PATH.dest.libs));
});

gulp.task('script', function() {
  var tsResult = gulp.src(PATH.src.ts)
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .on('error', onError);

  return merge([
    tsResult.js.pipe(concat('all.js')).pipe(sourcemaps.write('.')).pipe(gulp.dest(PATH.dest.ts)),
    tsResult.js.pipe(concat('all.js')).pipe(gulp.dest(PATH.dest.ts))
    ]);
});

var watch = function() {
  gulp.watch(PATH.src.html, ['html']);
  gulp.watch(PATH.src.less, ['less']);
  gulp.watch(PATH.src.ts, ['script']);
}

gulp.task('watch', watch);

gulp.task('serve', function() {
  var http = require('http');
  var connect = require('connect');
  var serveStatic = require('serve-static');
  var open = require('open');

  var port = 9000;
  var app;

  watch();

  app = connect().use(serveStatic(__dirname + '/public'));
  http.createServer(app).listen(port, function() {
    open('http://localhost:' + port);
  });
});

gulp.task('clean', function() {
  return del([
    PATH.dest.html,
    PATH.dest.ts,
    PATH.dest.less
  ]);
});

gulp.task('play', ['default', 'serve']);

gulp.task('default', ['html', 'less', 'libs', 'script']);
