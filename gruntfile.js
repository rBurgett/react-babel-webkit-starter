module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'client/css/main.css': 'less/*.less'
                },
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
                    new (require('less-plugin-clean-css'))()
                ]
            }
        },

        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015', 'react']
            },
            dist: {
                files: {
                    'dist/main.js': 'src/**.jsx'
                }
            }
        },

        webpack: {
            myConfig: {
                entry: './dist/main.js',
                output: {
                    path: './client/js/',
                    filename: 'main.js'
                },
                stats: {
                    colors: true
                }
            }
        },

        uglify: {
            build: {
                src: 'client/js/main.js',
                dest: 'client/js/main.min.js'
            }
        },

        cssmin: {
            build: {
                files: {
                    'client/css/main.min.css': ['client/css/main.css']
                }
            }
        },

        flow: {
            options: {
                style: 'color'
            },
            files: {}
        },

        watch: {
            less: {
                files: ['less/**'],
                tasks: ['less']
            },
            js: {
                files: ['src/**'],
                tasks: ['flow', 'babel', 'webpack']
            }
        }

    });

// 3. Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-flow');

// 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.

    grunt.registerTask('default', ['less', 'flow', 'babel', 'webpack']);

    grunt.registerTask('minify', ['cssmin', 'uglify']);

}
