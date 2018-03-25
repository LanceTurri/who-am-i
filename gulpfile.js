// Dependencies
// =============================================================================
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browsersync = require('browser-sync').create();
const webpack = require('webpack-stream');


// Configuration
// =============================================================================
const tsConfig = $.typescript.createProject('tsconfig.json');
const paths = {
    html: "./index.html",
    scss: "src/styles/**/*.scss",
    ts: "src/scripts/**/*.ts",
    js: "src/scripts/**/*.js",
    images: "src/images/**",
    output: "dist",
};


const error = (error) => console.log(`ERROR: ${error}`);


// Build tasks
// =============================================================================
gulp.task('build:scss', () => {
    return gulp.src(paths.scss, { base: 'src' })
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', error))
        .pipe($.autoprefixer().on('error', error))
        .pipe($.csso().on('error', error))
        .pipe($.rename({ extname: '.min.css'}))
        .pipe($.sourcemaps.write('./'))
        .pipe($.debug({ title: 'CSS |' }))
        .pipe(gulp.dest(paths.output))
        .pipe(browsersync.stream())
        .pipe($.notify('SCSS task finished'));
});

gulp.task('build:ts', () => {
    return gulp.src('./src/scripts/app.ts', { base: 'src' })
        //.pipe($.debug({ title: 'JS  |' }))
        .pipe(webpack(require('./webpack.config.js')))
        .pipe($.rename({
            dirname: "scripts",
        }))
        .pipe(gulp.dest(paths.output))
        .pipe(browsersync.stream())
        .pipe($.notify('TS task finished'));
});

gulp.task('build:images', () => {
    return gulp.src(paths.images, { base: 'src' })
        .pipe($.imagemin())
        .pipe(gulp.dest(paths.output));
})

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
