const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('js', () => {
    return gulp.src('./js/index.js').pipe(babel({
            presets: ['env','react']
        })
    ).pipe(gulp.dest('./dist'))
});


gulp.task('default', ['js'], () => {
    gulp.watch('js/index.js', ['js']);
});