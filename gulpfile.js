// import gulp, { watch } from 'gulp'
// import webp from 'gulp-webp'
// import uglify from 'gulp-uglify'
// import autoprefixer from 'gulp-autoprefixer'

const imageminWebp = require('imagemin-webp');

gulp.task('hello', function(cb) {
	gulp.src('src/images/*.jpg')
	.pipe(gulp.dest('build/images'))
	cb();
});

// // Copy all HTML files
// gulp.task('copyHtml', async function() {
// 	gulp.src('src/*.html')
// 	.pipe(gulp.dest('build'))
// });

// // Copy all image files
// gulp.task('copyImg', async function() {
// 	gulp.src('src/images/*')
// 	.pipe(gulp.dest('build/images'))
// });

// // Create WebP images from jpgs
// gulp.task('webP', async function() {
// 	gulp.src('src/images/*.jpg')
// 	.pipe(webp())
// 	.pipe(gulp.dest('build/images'))
// });

// // Add necessary prefixes to CSS
// gulp.task('prefix', async function() {
// 	gulp.src('src/css/*.css')
// 	.pipe(autoprefixer())
// 	.pipe(gulp.dest('build/css'))
// });

// // Minify js
// gulp.task('compress', async function () {
//   gulp.src('src/js/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('build/js'))
// });

// gulp.task('default', gulp.series('copyHtml', 'copyImg', 'webP', 'prefix', 'compress'));

// exports.default() = () => {
// 	watch('src/*.html', { delay: 500 }, 'default')
// }