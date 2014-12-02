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
                    {dest: "<%= dirs.dest %>/", src: "assets/js/jquery*.min.js", expand: true, cwd: "<%= dirs.src %>/"},
                ]
            }
        },

        jekyll: {
            site: {}
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    ignoreCustomComments: [/^\s*google(off|on):\s/],
                    minifyCSS: true,
                    minifyJS: true,
                    removeAttributeQuotes: true,
                    removeComments: true
                },
                expand: true,
                cwd: "<%= dirs.dest %>",
                dest: "<%= dirs.dest %>",
                src: [
                    "**/*.html",
                    "!404.html"
                ]
            }
        },

        xmlmin: {
            dist: {
                expand: true,
                cwd: "<%= dirs.dest %>",
                dest: "<%= dirs.dest %>",
                src: [
                    "**/*.xml"
                ]
            }
        },

        concat: {
            css: {
                src: ["<%= dirs.src %>/assets/css/bootstrap.css",
                      "<%= dirs.src %>/assets/css/font-awesome.css",
                      "<%= dirs.src %>/assets/css/jquery.fancybox.css",
                      "<%= dirs.src %>/assets/css/jquery.fancybox-thumbs.css",
                      "<%= dirs.src %>/assets/css/style.css"],
                dest: "<%= dirs.dest %>/assets/css/pack.css"
            },
            js: {
                src: ["<%= dirs.src %>/assets/js/plugins.js",
                      "<%= dirs.src %>/assets/js/bootstrap.js",
                      "<%= dirs.src %>/assets/js/jquery.mousewheel.js",
                      "<%= dirs.src %>/assets/js/jquery.fancybox.js",
                      "<%= dirs.src %>/assets/js/jquery.fancybox-thumbs.js"],
                dest: "<%= dirs.dest %>/assets/js/pack.js"
            },
            jsIE: {
                src: ["<%= dirs.src %>/assets/js/html5shiv.js",
                      "<%= dirs.src %>/assets/js/respond.js"],
                dest: "<%= dirs.dest %>/assets/js/html5shiv-respond.min.js"
            }
        },

        uncss: {
            options: {
                ignore: [
                    /(#|\.)fancybox(\-[a-zA-Z]+)?/,
                    // needed for Bootstrap's transitions
                    ".fade",
                    ".fade.in",
                    ".collapse",
                    ".collapse.in",
                    ".navbar-collapse",
                    ".navbar-collapse.in",
                    ".collapsing",
                    // needed for the `<noscript>` warning; remove them when fixed in uncss
                    ".alert-danger",
                    ".visible-xs",
                    ".noscript-warning",
                    // currently only in a IE conditional so uncss doesn't see it
                    ".close",
                    ".alert-dismissible"
                ],
                htmlroot: "<%= dirs.dest %>",
                ignoreSheets: [/fonts.googleapis/]
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
                    compatibility: "ie8"
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
            },
            minifyIE: {
                files: {
                    "<%= concat.jsIE.dest %>": "<%= concat.jsIE.dest %>"
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
                    "!<%= dirs.dest %>/assets/js/jquery*.min.js"
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
            html: "<%= dirs.dest %>/**/*.html",
            options: {
                assetsDirs: ["<%= dirs.dest %>/", "<%= dirs.dest %>/assets/img/"]
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
            files: ["<%= dirs.src %>/**", ".jshintrc", "_config.yml", "Gruntfile.js"],
            tasks: "dev",
            options: {
                livereload: "<%= connect.options.livereload %>"
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
                src: "Gruntfile.js"
            }
        },

        validation: {
            options: {
                charset: "utf-8",
                doctype: "HTML5",
                failHard: true,
                reset: true
            },
            files: {
                src: "<%= dirs.dest %>/**/*.html"
            }
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
        "htmlmin",
        "xmlmin"
    ]);

    grunt.registerTask("test", [
        "build",
        "csslint",
        "bootlint",
        "jshint",
        "validation"
    ]);

    grunt.registerTask("dev", [
        "jekyll",
        "useminPrepare",
        "copy",
        "concat",
        "filerev",
        "usemin"
    ]);

    grunt.registerTask("default", [
        "dev",
        "connect",
        "watch"
    ]);

};
