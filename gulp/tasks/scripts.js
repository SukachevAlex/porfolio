module.exports = function() {

    $.gulp.task('scripts', function() {
        return $.gulp.src([
                './app/scripts/*.js',
                '!./app/scripts/libs.min.js'
            ])
            .pipe($.gulp.dest('dist/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

};