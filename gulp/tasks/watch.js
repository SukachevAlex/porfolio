module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./app/project/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/styles/**/*.sass', $.gulp.series('sass:dev'));
        $.gulp.watch('./app/scripts/**/*.js', $.gulp.series('scripts'));
        $.gulp.watch('./app/img/**/*.*', $.gulp.series('img:dev'));
    });
    $.gulp.task('manifest', function() {
        return $.gulp.src('app/**.*')
            .pipe($.gulp.dest('dist/'))
    });
};