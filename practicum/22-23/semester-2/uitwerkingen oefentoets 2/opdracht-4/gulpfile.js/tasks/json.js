const {src, dest} = require('gulp');

const json = function (filesJSON) {
    return function () {

        //#student-start
        return src(filesJSON)
            .pipe(dest('./dist'));
        //#student-end
        //json taak werkend maken
    }
};

exports.json = json;
