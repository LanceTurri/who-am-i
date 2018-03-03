// Dependencies
// =============================================================================
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browsersync = require('browser-sync').create();


// Configuration
// =============================================================================
const tsConfig = $.typescript.createProject('tsconfig.json');
const paths = {
    "html": "./index.html",
    "scss": "src/styles/**/*.scss",
    "ts": "src/scripts/**/*.ts",
    "output": "dist",
};


// Build tasks
// =============================================================================
gulp.task('build:scss', () => {
    return gulp.src(paths.scss, { base: 'src' })
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .on('error', $.notify.onError((error) => `File: ${error.message}`))
        .pipe($.autoprefixer())
        .pipe($.csso())
        .pipe($.rename({ extname: '.min.css'}))
        .pipe($.sourcemaps.write('./'))
        .pipe($.debug({ title: 'CSS |' }))
        .pipe(gulp.dest(paths.output))
        .pipe(browsersync.stream())
        .pipe($.notify('SCSS task finished'));
    });
    
    gulp.task('build:ts', () => {
        return gulp.src(paths.ts, { base: 'src' })
        .pipe($.debug({ title: 'JS  |' }))
        .pipe(tsConfig())
        .pipe($.sourcemaps.init())
        .pipe($.uglify())
        .pipe($.rename({ extname: '.min.js'}))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.output))
        .pipe(browsersync.stream())
        .pipe($.notify('TS task finished'));
    });

gulp.task('serve', ['build:scss', 'build:ts'], () => {
    browsersync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(paths.scss, ['build:scss']);
    gulp.watch(paths.ts, ['build:ts']);
    gulp.watch(paths.html).on('change', browsersync.reload);
});


// Default
// =============================================================================
gulp.task('default', ['serve']);
