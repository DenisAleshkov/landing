"use strict";

var gulp = require('gulp'),
    cleanCSS = require("gulp-clean-css"),
    imagemin = require("gulp-imagemin"),
    spritesmith = require('gulp.spritesmith'),
    concatCss = require('gulp-concat-css'),
    browsersync   = require("browser-sync").create(),
    svgSprite = require('gulp-svg-sprite'),
    sass = require('gulp-sass');


function clean() {
  return gulp.src('./css/styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
}
exports.clean=clean;
function concat()
{
  return gulp.src(['./css/*.css', '!./css/styles.css'])
    .pipe(concatCss("./css/styles.css",{
      rebaseUrls:false
    }))
    .pipe(gulp.dest('./'));
}
exports.concat=concat;

function spriteSvg()
{
  return gulp.src('./images/svg/*.svg')
      .pipe(svgSprite(
      {
         svg:
         {
            sprite: './sprite.svg',
         },
         svgPath: '/images/sprite.svg?'+Date.now(),
         preview: false,
         cssFile: "../css/sprite_svg.css"
      }))
      .pipe(gulp.dest("./images/"));
}
exports.spriteSvg=spriteSvg; 

function sprite()
{
    var spriteData = 
        gulp.src('./images/png/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgPath: '/images/sprite.png?'+Date.now(),
                imgName: 'sprite.png',
                cssName: 'sprite.css',
            }));

    spriteData.img.pipe(gulp.dest('./images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./css/')); // путь, куда сохраняем стили

    return spriteData;
}
exports.sprite=sprite;

function imageMin() {
  return gulp.src('./images/')
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{removeViewBox: true}]
    }))
    .pipe(gulp.dest('./images'));
}
exports.imageMin=imageMin;

// Define tasks after requiring dependencies
function scss() {  
        return (gulp 
        .src("./css/*.sass")
        // Use sass with the files found, and log any errors
        .pipe(sass({
          includePaths: [
            'node_modules/compass-mixins/lib'
          ]
        }))
        .on("error", sass.logError)
        // What is the destination for the compiled file?
        .pipe(gulp.dest("./css")));
}

exports.scss = scss;

function watchFiles() {
    gulp.watch('./css/*.sass', gulp.series(scss,concat,clean));
    gulp.watch('./images/png/*.*',     sprite);
    gulp.watch('./images/svg/*.*',    spriteSvg);
}

function reload(done) {
  browsersync.reload();
  done();
}

function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000,
    notify: false
  });

  gulp.watch("./css/styles.css", reload);
  gulp.watch("./*.html", reload);
}


const watch = gulp.parallel(watchFiles,browserSync);
exports.watch = watch;