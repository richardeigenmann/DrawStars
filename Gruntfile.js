module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['bower_components/reveal.js/css/theme/league.css'], dest: 'public_html/build/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/reveal.js/lib/font/league-gothic/*'], dest: 'public_html/build/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/highlightjs/styles/zenburn.css'], dest: 'public_html/build/', filter: 'isFile'},
                ],
            },
        },
        bower_concat: {
            all: {
                dest: 'public_html/build/presentation-concat.js',
                cssDest: 'public_html/build/presentation.css',
                include: ['reveal.js'],
                mainFiles: {
                    'reveal.js': ['js/reveal.js', 'lib/js/head.min.js', 'lib/js/classList.js',
                        'plugin/highlight/highlight.js',
                        'css/reveal.css', 
                        'bower_components/reveal.js/lib/font/league-gothic/league-gothic.css']
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['bower_concat', 'uglify:bower']);
}
