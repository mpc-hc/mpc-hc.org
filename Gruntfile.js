"use strict";

module.exports = function(grunt) {

    grunt.initConfig({
        dirs: {
            dest: "_site",
            src: "source"
        },

        // Copy files that don't need compilation to dist/
        copy: {
            dist: {
                files: [
                    {dest: "<%= dirs.dest %>/", src: "assets/js/vendor/jquery*.min.js", expand: true, cwd: "<%= dirs.src %>/"},
                ]
            }
        },

        jekyll: {
            site: {
                options: {
                    bundleExec: true
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    ignoreCustomComments: [/^\s*google(off|on):\s/],
                    minifyCSS: {
                        compatibility: "ie9",
                        keepSpecialComments: 0
                    },
                    minifyJS: true,
                    minifyURLs: false,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeOptionalAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                expand: true,
                cwd: "<%= dirs.dest %>",
                dest: "<%= dirs.dest %>",
                src: [
                    "**/*.html",
                    "**/*.php",
                    "!404.html"
                ]
            }
        },

        concat: {
            css: {
                src: ["<%= dirs.src %>/assets/css/vendor/bootstrap.css",
                      "<%= dirs.src %>/assets/css/vendor/font-awesome.css",
                      "<%= dirs.src %>/assets/css/vendor/jquery.fancybox.css",
                      "<%= dirs.src %>/assets/css/style.css"],
                dest: "<%= dirs.dest %>/assets/css/pack.css"
            },
            js: {
                src: ["<%= dirs.src %>/assets/js/vendor/plugins.js",
                      "<%= dirs.src %>/assets/js/vendor/bootstrap.js",
                      "<%= dirs.src %>/assets/js/vendor/jquery.mousewheel.js",
                      "<%= dirs.src %>/assets/js/vendor/jquery.fancybox.js",
                      "<%= dirs.src %>/assets/js/alert-dismissible.js",
                      "<%= dirs.src %>/assets/js/img-defer.js",
                      "<%= dirs.src %>/assets/js/no-js-class.js",
                      "<%= dirs.src %>/assets/js/google-analytics.js"],
                dest: "<%= dirs.dest %>/assets/js/pack.js"
            }
        },

        uncss: {
            options: {
                ignore: [
                    /(#|\.)fancybox(\-[a-zA-Z]+)?/,
                    // Bootstrap selectors added via JS
                    /\w\.in/,
                    ".fade",
                    ".collapse",
                    ".collapsing",
                    /(#|\.)navbar(\-[a-zA-Z]+)?/,
                    /(#|\.)dropdown(\-[a-zA-Z]+)?/,
                    /(#|\.)(open)/,
                    // injected via JS
                    /disabled/,
                    /fa-chevron-up/,
                    /\.no\-js/,
                    // currently only in a IE conditional, so uncss doesn't see it
                    ".close",
                    ".alert-dismissible"
                ],
                htmlroot: "<%= dirs.dest %>",
                ignoreSheets: [/fonts.googleapis/],
                stylesheets: ["/assets/css/pack.css"]
            },
            dist: {
                src: "<%= dirs.dest %>/**/*.html",
                dest: "<%= concat.css.dest %>"
            }
        },

        cssmin: {
            minify: {
                options: {
                    keepSpecialComments: 0,
                    compatibility: "ie9"
                },
                files: {
                    "<%= uncss.dist.dest %>": "<%= concat.css.dest %>"
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
                    "<%= concat.js.dest %>": "<%= concat.js.dest %>"
                }
            }
        },

        filerev: {
            css: {
                src: "<%= dirs.dest %>/assets/css/**/{,*/}*.css"
             },
            js: {
                src: [
                    "<%= dirs.dest %>/assets/js/**/{,*/}*.js",
                    "!<%= dirs.dest %>/assets/js/vendor/jquery*.min.js"
                ]
            },
            images: {
                src: [
                    "<%= dirs.dest %>/assets/img/**/*.{jpg,jpeg,gif,png}",
                    "!<%= dirs.dest %>/assets/img/logo-144x144.png",
                    "!<%= dirs.dest %>/assets/img/logo-256x256.png",
                    "!<%= dirs.dest %>/assets/img/TileImage.png"
                ]
            }
        },

        useminPrepare: {
            html: "<%= dirs.dest %>/index.html",
            options: {
                dest: "<%= dirs.dest %>",
                root: "<%= dirs.dest %>"
            }
        },

        usemin: {
            css: "<%= dirs.dest %>/assets/css/pack*.css",
            html: ["<%= dirs.dest %>/**/*.html", "<%= dirs.dest %>/**/*.php"],
            options: {
                assetsDirs: ["<%= dirs.dest %>/", "<%= dirs.dest %>/assets/img/"]
            }
        },

        cdnify: {
            build: {
                options: {
                    base: "https://assets.mpc-hc.org/",
                    html: {
                        "meta[name='msapplication-TileImage']": "content",
                        "meta[itemprop='image']": "content",
                        "meta[property='og:image:secure_url']": "content"
                    }
                },
                files: [{
                  expand: true,
                  cwd: "<%= dirs.dest %>/",
                  src: "**/*.{html,php}",
                  dest: "<%= dirs.dest %>/"
                }]
            }
        },

        connect: {
            options: {
                hostname: "localhost",
                livereload: 35729,
                port: 8000
            },
            livereload: {
                options: {
                    base: "<%= dirs.dest %>/",
                    open: true  // Automatically open the webpage in the default browser
                }
            }
        },

        watch: {
            options: {
                livereload: "<%= connect.options.livereload %>"
            },
            dev: {
                files: ["<%= dirs.src %>/**", ".jshintrc", "_config.yml", "Gruntfile.js"],
                tasks: "dev"
            },
            build: {
                files: ["<%= dirs.src %>/**", ".jshintrc", "_config.yml", "Gruntfile.js"],
                tasks: "build"
            }
        },

        csslint: {
            options: {
                csslintrc: ".csslintrc"
            },
            src: "<%= dirs.src %>/assets/css/style.css"
        },

        bootlint: {
            options: {
                relaxerror: ["W002"]
            },
            files: ["<%= dirs.dest %>/**/*.html", "!<%= dirs.dest %>/404.html"]
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            files: {
                src: ["Gruntfile.js", "<%= dirs.src %>/assets/js/*.js", "!<%= dirs.src %>/assets/js/google-analytics.js"]
            }
        },

        htmllint: {
            src: "<%= dirs.dest %>/**/*.html"
        },

        clean: {
            dist: "<%= dirs.dest %>/"
        }

    });

    // Load any grunt plugins found in package.json.
    require("load-grunt-tasks")(grunt, {scope: "devDependencies"});
    require("time-grunt")(grunt);

    grunt.registerTask("build", [
        "clean",
        "jekyll",
        "useminPrepare",
        "copy",
        "concat",
        "uncss",
        "cssmin",
        "uglify",
        "filerev",
        "usemin",
        "cdnify",
        "htmlmin"
    ]);

    grunt.registerTask("test", [
        "build",
        "csslint",
        "bootlint",
        "jshint",
        "htmllint"
    ]);

    grunt.registerTask("dev", [
        "jekyll",
        "useminPrepare",
        "copy",
        "concat",
        "filerev",
        "usemin"
    ]);

    grunt.registerTask("server", [
        "build",
        "connect",
        "watch:build"
    ]);

    grunt.registerTask("default", [
        "dev",
        "connect",
        "watch:dev"
    ]);

};
