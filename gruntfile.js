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
        }

        // watch: {
        //     scripts: {
        //         files: ['less/**'],
        //         tasks: ['less']
        //     }
        // }

    });

// 3. Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-webpack');

// 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.

    grunt.registerTask('default', ['less', 'babel', 'webpack']);

}
