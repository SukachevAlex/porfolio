module.exports = function() {
    $.gulp.task('pug', function() {
        return $.gulp.src([
                'app/project/pages/index/*.pug',
                'app/project/pages/portfolio/*.pug',
                'app/project/pages/blog/*.pug',
                'app/project/pages/contact/*.pug',
                'app/project/pages/skills/*.pug',
                'app/project/pages/projects/project-agriplus/*.pug',
                'app/project/pages/projects/project-domYandex/*.pug',
                'app/project/pages/projects/project-gratia/*.pug',
                'app/project/pages/projects/project-hemma/*.pug',
                'app/project/pages/projects/project-portfolio/*.pug',
                'app/project/pages/projects/project-posh/*.pug',
                'app/project/pages/projects/project-smitler/*.pug',
                'app/project/pages/projects/project-wedding/*.pug',
            ])
            .pipe($.gp.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('dist'))
            .on('end', $.browserSync.reload);
    });
};