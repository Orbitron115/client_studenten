const {src, dest} = require('gulp');

const json = function (filesJSON) {
    return function () {

        //#student-start json taak werkend maken
        return src(filesJSON)
            .pipe(dest('./dist'));
        //#student-end

    }
};

exports.json = json;
