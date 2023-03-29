const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const order = require('gulp-order');

    const fn = function (jsfiles, jsorder) {
        console.log(jsfiles)
        return function () {
            return src(jsfiles)
                .pipe(order(jsorder))

                //#student-start
                .pipe(concat('app.js'))
                //#student-end
                //javascript taak werkend maken

                .pipe(dest('./dist'));
        }
};

exports.js = fn;
