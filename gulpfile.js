var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('resource/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('copy', function () {
    return gulp.src('resource/font/*')
        .pipe(gulp.dest('app/font'));
});

gulp.task('copy_js', function () {
    return gulp.src('resource/js/*')
        .pipe(gulp.dest('app/js'));
});

gulp.task('copy_1', function () {
    return gulp.src('resource/fontawesome/*/*')
        .pipe(gulp.dest('app/css/fontawesome'));
});


gulp.task('copy_images', function () {
    return gulp.src('resource/images/*')
        .pipe(gulp.dest('app/images'));
});

gulp.task('watch', function () {
    gulp.watch('resource/scss/app.scss', ['sass']);
    gulp.watch('resource/scss/*/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'copy', 'copy_js', 'copy_1', 'copy_images']);
