'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        dirs: {
            dest: '_site',
            src: 'source'
        },

        jekyll: {
            site: {
                options: {
                    bundleExec: true,
                    incremental: false
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    conservativeCollapse: false,
                    decodeEntities: true,
                    ignoreCustomComments: [/^\s*google(off|on):\s/],
                    minifyCSS: {
                        level: {
                            1: {
                                specialComments: 0
                            }
                        }
                    },
                    minifyJS: true,
                    minifyURLs: false,
                    processConditionalComments: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeOptionalAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeTagWhitespace: false,
                    sortAttributes: true,
                    sortClassName: true
                },
                expand: true,
                cwd: '<%= dirs.dest %>',
                dest: '<%= dirs.dest %>',
                src: ['**/*.html', '**/*.php']
            }
        },

        concat: {
            css: {
                src: [
                    '<%= dirs.src %>/assets/css/vendor/font-awesome.css',
                    '<%= dirs.src %>/assets/css/vendor/bootstrap.css',
                    '<%= dirs.src %>/assets/css/vendor/baguetteBox.css',
                    '<%= dirs.src %>/assets/css/fonts.css',
                    '<%= dirs.src %>/assets/css/style.css'
                ],
                dest: '<%= dirs.dest %>/assets/css/pack.css'
            },
            jqueryJS: {
                src: [
                    '<%= dirs.src %>/assets/js/vendor/jquery.slim.min.js',
                    '<%= dirs.src %>/assets/js/vendor/bootstrap.js',
                    '<%= dirs.src %>/assets/js/downloads.js'
                ],
                dest: '<%= dirs.dest %>/assets/js/jquery-pack.js'
            },
            js: {
                src: [
                    '<%= dirs.src %>/assets/js/vendor/plugins.js',
                    '<%= dirs.src %>/assets/js/vendor/baguetteBox.js',
                    '<%= dirs.src %>/assets/js/baguetteBox-init.js',
                    '<%= dirs.src %>/assets/js/detect-os.js',
                    '<%= dirs.src %>/assets/js/img-defer.js',
                    '<%= dirs.src %>/assets/js/no-js-class.js',
                    '<%= dirs.src %>/assets/js/pwa.js',
                    '<%= dirs.src %>/assets/js/google-analytics.js'
                ],
                dest: '<%= dirs.dest %>/assets/js/pack.js'
            },
            sw: {
                src: [
                    '<%= dirs.src %>/assets/js/sw.js'
                ],
                dest: '<%= dirs.dest %>/sw.min.js'
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'last 2 version',
                    '> 1%',
                    'Edge >= 12',
                    'Explorer >= 9',
                    'Firefox ESR',
                    'Opera 12.1'
                ]
            },
            pack: {
                src: '<%= concat.css.dest %>',
                dest: '<%= concat.css.dest %>'
            }
        },

        uncss: {
            options: {
                ignore: [
                    /(#|\.)baguetteBox(-[a-zA-Z]+)?/,
                    // Bootstrap selectors added via JS
                    /\w\.in/,
                    '.fade',
                    '.collapse',
                    '.collapsed',
                    '.collapsing',
                    /(#|\.)navbar(-[a-zA-Z]+)?/,
                    /(#|\.)dropdown(-[a-zA-Z]+)?/,
                    /(#|\.)(open)/,
                    // injected via JS
                    /disabled/,
                    /\.no-js/,
                    /\.defer/
                ],
                htmlroot: '<%= dirs.dest %>',
                ignoreSheets: [/fonts.googleapis/],
                stylesheets: ['/assets/css/pack.css']
            },
            dist: {
                src: '<%= dirs.dest %>/**/*.html',
                dest: '<%= concat.css.dest %>'
            }
        },

        cssmin: {
            minify: {
                options: {
                    level: {
                        1: {
                            specialComments: 0
                        }
                    }
                },
                files: {
                    '<%= uncss.dist.dest %>': '<%= concat.css.dest %>'
                }
            }
        },

        uglify: {
            options: {
                compress: {
                    warnings: false
                },
                mangle: true,
                preserveComments: false
            },
            minify: {
                files: {
                    '<%= concat.js.dest %>': '<%= concat.js.dest %>',
                    '<%= concat.jqueryJS.dest %>': '<%= concat.jqueryJS.dest %>',
                    '<%= concat.sw.dest %>': '<%= concat.sw.dest %>'
                }
            }
        },

        filerev: {
            css: {
                src: '<%= dirs.dest %>/assets/css/**/*.css'
            },
            js: {
                src: [
                    '<%= dirs.dest %>/assets/js/**/*.js',
                    '!<%= dirs.dest %>/assets/js/vendor/jquery*.min.js',
                    '<%= dirs.dest %>/sw.min.js'
                ]
            },
            images: {
                src: [
                    '<%= dirs.dest %>/assets/img/**/*.{jpg,jpeg,gif,png,svg}',
                    '!<%= dirs.dest %>/assets/img/favicons/*.{jpg,jpeg,gif,png,svg}',
                    '!<%= dirs.dest %>/assets/img/logo-256x256.png'
                ]
            }
        },

        useminPrepare: {
            html: [
                '<%= dirs.dest %>/index.html'
            ],
            options: {
                dest: '<%= dirs.dest %>',
                root: '<%= dirs.dest %>'
            }
        },

        usemin: {
            options: {
                assetsDirs: [
                    '<%= dirs.dest %>/',
                    '<%= dirs.dest %>/assets/img/'
                ],
                patterns: {
                    js: [
                        [/navigator\.serviceWorker\.register\(["'](\/sw\.min\.js)["']/gm, 'Replacing reference to sw.min.js']
                    ]
                }
            },
            css: '<%= dirs.dest %>/assets/css/pack*.css',
            js: '<%= dirs.dest %>/assets/js/pack*.js',
            html: [
                '<%= dirs.dest %>/**/*.html',
                '<%= dirs.dest %>/**/*.php'
            ]
        },

        cdnify: {
            build: {
                options: {
                    base: 'https://cdn.mpc-hc.org/',
                    html: {
                        'meta[itemprop="image"]': 'content',
                        'meta[property="og:image:secure_url"]': 'content',
                        'input[type="image"]': 'src'
                    }
                },
                files: [{
                    expand: true,
                    cwd: '<%= dirs.dest %>/',
                    src: '**/*.{html,php}',
                    dest: '<%= dirs.dest %>/'
                }]
            }
        },

        connect: {
            options: {
                hostname: 'localhost',
                livereload: 35729,
                port: 8000
            },
            livereload: {
                options: {
                    base: '<%= dirs.dest %>/',
                    open: true  // Automatically open the webpage in the default browser
                }
            }
        },

        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            dev: {
                files: ['<%= dirs.src %>/**', '_config.yml', 'Gruntfile.js'],
                tasks: 'dev'
            },
            build: {
                files: ['<%= dirs.src %>/**', '_config.yml', 'Gruntfile.js'],
                tasks: 'build'
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            src: '<%= dirs.src %>/assets/css/style.css'
        },

        bootlint: {
            options: {
                relaxerror: ['W001', 'W002', 'W003']
            },
            files: '<%= dirs.dest %>/**/*.html'
        },

        eslint: {
            options: {
                config: '.eslintrc.json'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: [
                    '<%= dirs.src %>/assets/js/*.js',
                    '!<%= dirs.src %>/assets/js/google-analytics.js'
                ]
            }
        },

        htmllint: {
            src: '<%= dirs.dest %>/**/*.html'
        },

        accessibility: {
            options: {
                accessibilityLevel: 'WCAG2AA',
                browser: true,
                reportLevels: {
                    notice: false,
                    warning: false,
                    error: true
                }
            },
            test: {
                src: '<%= dirs.dest %>/**/*.html'
            }
        },

        clean: {
            dist: '<%= dirs.dest %>/'
        }

    });

    // Load any grunt plugins found in package.json.
    require('load-grunt-tasks')(grunt, { scope: 'dependencies' });
    require('time-grunt')(grunt);

    grunt.registerTask('generate-sri', 'Generate SRI hashes for our assets.', function () {

        function sriDigest(filePattern) {
            var sriToolbox = require('sri-toolbox');
            var matches = grunt.file.expand({ filter: 'isFile' }, filePattern);
            var match = matches[0];     // `grunt.file.expand` returns an array
            var matchCount = matches.length;
            var integrity = '';

            if (matchCount === 0) {
                grunt.fail.fatal('Generating SRI failed; didn\'t find any matches!');
            } else if (matchCount > 1) {
                // shouldn't really happen since we clean the '_site' directory
                grunt.fail.fatal('Generating SRI failed; Found more than one matches!');
            }

            try {
                integrity = sriToolbox.generate({ algorithms: ['sha384'] }, grunt.file.read(match));
            } catch (err) {
                grunt.log.error(err);
                grunt.fail.fatal('Generating SRI hash failed.');
            }

            grunt.log.ok('Generated SRI hash for ' + match.cyan + '.');
            return integrity;

        }

        var packCssIntegrity = sriDigest('_site/assets/css/pack.*.css');
        var packJsIntegrity = sriDigest('_site/assets/js/pack.*.js');
        var jqueryPackJsIntegrity = sriDigest('_site/assets/js/jquery-pack.*.js');

        grunt.config('includereplace', {
            dist: {
                options: {
                    globals: {
                        packCssIntegrity: packCssIntegrity,
                        packJsIntegrity: packJsIntegrity,
                        jqueryPackJsIntegrity: jqueryPackJsIntegrity
                    }
                },
                files: [{
                    src: ['**/*.html', '**/*.php'],
                    dest: '<%= dirs.dest %>/',
                    expand: true,
                    cwd: '<%= dirs.dest %>/'
                }]
            }
        });

    });

    var buildTasks = [
        'clean',
        'jekyll',
        'useminPrepare',
        'concat',
        'autoprefixer',
        'uncss',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'generate-sri',
        'includereplace',
        'cdnify',
        'htmlmin'
    ];

    // If we are on CI, skip the cdnify task
    var envCI = process.env.CI || process.env.ci;

    if (envCI && envCI.toLowerCase() === 'true') {
        buildTasks.splice(12, 1);
    }

    grunt.registerTask('build', buildTasks);

    grunt.registerTask('test', [
        'build',
        'csslint',
        'bootlint',
        'eslint',
        'htmllint',
        'accessibility'
    ]);

    grunt.registerTask('dev', [
        'jekyll',
        'useminPrepare',
        'concat',
        'autoprefixer',
        'filerev',
        'usemin',
        'generate-sri',
        'includereplace'
    ]);

    grunt.registerTask('server', [
        'build',
        'connect',
        'watch:build'
    ]);

    grunt.registerTask('default', [
        'dev',
        'connect',
        'watch:dev'
    ]);

};
