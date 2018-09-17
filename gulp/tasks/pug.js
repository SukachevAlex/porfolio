module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src('app/project/pages/*.pug')
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.browserSync.reload);
    });
};