module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src([
                'app/project/pages/index/*.pug',
                'app/project/pages/portfolio/*.pug',
                'app/project/pages/blog/*.pug',
                'app/project/pages/contact/*.pug',
            ])
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.browserSync.reload);
    });
};