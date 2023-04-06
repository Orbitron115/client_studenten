module.exports = {
    files: {
        js: [
                'vendor/**/*.js',
                'src/js/**/*.js'

        ],
        jsOrder: [
                'src/js/game.js',
                'src/js/**/*.js',
                'vendor/**/*.js'

        ],
        css: [

                //#student-start
                'src/**/*.css',
                //#student-end
                //glob werkend maken

                'vendor/**/*.css'

        ],
        html: [
                './src/index.html'

        ],
        image: [
                './src/img/**/*.*'

        ],
        json: [
                './vendor//**/*.json'

        ]
    }
};
