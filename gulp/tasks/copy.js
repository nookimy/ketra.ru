export const copycss = () => {
    return app.gulp.src(app.path.src.csslib)
        .pipe(app.gulp.dest(app.path.build.css))
}

export const copyjs = () => {
    return app.gulp.src(app.path.src.jslib)
        .pipe(app.gulp.dest(app.path.build.js))
}

export const copyimg = (done) => {
    function l(done) {
        var config = responsiveConfig(['src/components/blocks/partners/*.scss', 'src/components/blocks/partners/*.html'])


        return app.gulp.src('src/img-optimized/partners/*.{jpg,jpeg,png}')
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(responsive(config, {
            errorOnEnlargement: false,
            quality: 80,
            withMetadata: false,
            compressionLevel: 7,
            max: true
        }))
        .pipe(app.gulp.dest('docs/img/partners/'))
    }

    l();

    
    done();
}