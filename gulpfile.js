var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('scss', function(){
    return gulp.src('app/sass/**/*.scss')                   //     '!app/sass/**/js.scss' - ИСКЛЮЧАЕМ js.scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.scss', gulp.series('scss'));
});

// gulp.task('task_blablabla', function() {
//     return gulp.src('source-files')
//     .pipe(plugin())
//     .pipe(gulp.dest('folder'))
// });