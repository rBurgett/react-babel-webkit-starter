module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dist/css/main.css': 'less/*.less'
                },
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
                    new (require('less-plugin-clean-css'))()
                ]
            }
        },

        copy: {
            lib: {
                files: [
                    {expand: true, cwd: 'public/', src: ['**'], dest: 'dist/'}
                ]
            },
            main: {
                src: 'src/main.html',
                dest: 'dist/index.html'
            }
        },

        webpack: {
            myConfig: {
                entry: './src/main.jsx',
                output: {
                    path: './dist/js/',
                    filename: 'main.js'
                },
                stats: {
                    colors: true
                },
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules)/,
                            loaders: ['babel']
                        }
                    ]
                }
            }
        },

        uglify: {
            build: {
                src: 'dist/js/main.js',
                dest: 'dist/js/main.min.js'
            }
        },

        cssmin: {
            build: {
                files: {
                    'dist/css/main.min.css': ['dist/css/main.css']
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
                files: ['src/**/*.jsx'],
                tasks: ['webpack']
            },
            html: {
                files: ['src/main.html', 'public/**'],
                tasks: ['copy']
            }
        }

    });

// 3. Where we tell Grunt we plan to use this plug-in.

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-flow');

// 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.

    grunt.registerTask('default', ['less', 'webpack', 'copy']);

    grunt.registerTask('build', ['less', 'webpack', 'copy']);

    grunt.registerTask('build-production', ['empty-build-directory', 'less', 'cssmin', 'webpack', 'uglify', 'copy', 'use-minified']);

// 5. Custom Tasks

    grunt.registerTask('empty-build-directory', 'Empties the build directory', function() {

        var fs = require('fs-extra');

        var buildFolderPath = 'dist';

        try {
            fs.emptyDirSync(buildFolderPath);
        } catch(e) {
            grunt.log.error(e.message);
            return false;
        }

    });

    grunt.registerTask('use-minified', 'Update index.html to use minified files.', function() {

        var path = require('path'),
            fs = require('fs');

        var indexPath = path.join('dist', 'index.html');

        var indexHTML = '';

        // Read dist/index.html as text

        try {
            indexHTML = fs.readFileSync(indexPath, 'utf8');
        } catch(e) {
            grunt.log.error(e.message);
            return false;
        }

        // Find script tag for main.js

        var mainJSPatt = /(<script[^>]+src=[^>]+)(?:main\.js)([^<>]+>)/;

        if(!mainJSPatt.test(indexHTML)) {
            grunt.log.error('Unable to find script tag for main.js in dist/index.html');
            return false;
        }

        // Replace main.js with main.min.js

        indexHTML = indexHTML.replace(mainJSPatt, '$1main.min.js$2');

        // Find link tag for main.css

        var mainCSSPatt = /(<link[^>]+href=[^>]+)(?:main\.css)([^<>]+>)/;

        if(!mainCSSPatt.test(indexHTML)) {
            grunt.log.error('Unable to find link tag for main.css in dist/index.html');
            return false;
        }

        // Replace main.css with main.min.css

        indexHTML = indexHTML.replace(mainCSSPatt, '$1main.min.css$2');

        // Write the new index.html file

        try {
            fs.writeFileSync(indexPath, indexHTML, {encoding: 'utf8'});
        } catch(e) {
            grunt.log.error(e.message);
            return false;
        }

    });

};
