module.exports = function (grunt) {

    grunt.initConfig({
        bower_concat: {
            all: {
                dest: 'public_html/build/presentation-concat.js',
                cssDest: 'public_html/build/presentation.css',
                include: ['reveal.js'],
                mainFiles: {
                    'reveal.js': ['js/reveal.js', 'lib/js/head.min.js','lib/js/classList.js',
                        'plugin/highlight/highlight.js',
                        'css/reveal.css', 'lib/css/zenburn.css']
                }
            }
        },
        uglify: {
            bower: {
                options: {
                    mangle: true,
                    compress: true
                },
                files: {
                    'public_html/build/presentation-min.js': ['public_html/build/presentation-concat.js']
                }
            }
        }
    });

    //require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['bower_concat', 'uglify:bower']);
}
