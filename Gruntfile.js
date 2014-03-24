module.exports = function(grunt) {
    "use strict";

    var crypto = require("crypto");
    var currentDate = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var hash = crypto.createHash("sha1").update(currentDate + random).digest("hex");

    // Project configuration.
    grunt.initConfig({
        hash: hash,
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

        includereplace: {
            dist: {
                options: {
                    globals: {
                        HASH: hash
                    }
                },
                files: [
                    {src: "**/*.html", dest: "<%= dirs.dest %>/", expand: true, cwd: "<%= dirs.dest %>/"}
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    /*removeComments: true,*/
                    collapseWhitespace: true
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

        concat: {
            css: {
                src: ["<%= dirs.src %>/assets/css/bootstrap.css",
                      "<%= dirs.src %>/assets/css/font-awesome.css",
                      "<%= dirs.src %>/assets/css/jquery.fancybox.css",
                      "<%= dirs.src %>/assets/css/jquery.fancybox-thumbs.css",
                      "<%= dirs.src %>/assets/css/style.css"],
                dest: "<%= dirs.dest %>/assets/css/pack-<%= hash %>.css"
            },
            js: {
                src: ["<%= dirs.src %>/assets/js/plugins.js",
                      "<%= dirs.src %>/assets/js/bootstrap.js",
                      "<%= dirs.src %>/assets/js/jquery.mousewheel.js",
                      "<%= dirs.src %>/assets/js/jquery.fancybox.js",
                      "<%= dirs.src %>/assets/js/jquery.fancybox-thumbs.js"],
                dest: "<%= dirs.dest %>/assets/js/pack-<%= hash %>.js"
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
                    ".collapsing",
                    // needed for the <noscript> warning; remove when fixed in uncss
                    ".alert-danger",
                    ".visible-xs",
                    ".noscript-warning"
                ],
                htmlroot: "<%= dirs.dest %>",
                ignoreSheets: [/fonts.googleapis/],
                report: "min"
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
                    report: "min",
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
                preserveComments: false,
                report: "min"
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

        connect: {
            server: {
                options: {
                    base: "<%= dirs.dest %>/",
                    port: 8000
                }
            }
        },

        watch: {
            files: ["<%= dirs.src %>/**/*", ".jshintrc", "_config.yml", "Gruntfile.js"],
            tasks: "dev",
            options: {
                livereload: true
            }
        },

        csslint: {
            options: {
                csslintrc: ".csslintrc"
            },
            src: "<%= dirs.src %>/assets/css/style.css"
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
        "jekyll",
        "copy",
        "includereplace",
        "htmlmin",
        "concat",
        "uncss",
        "cssmin",
        "uglify"
    ]);

    grunt.registerTask("test", [
        "build",
        "csslint",
        "jshint",
        "validation"
    ]);

    grunt.registerTask("dev", [
        "jekyll",
        "copy",
        "includereplace",
        "concat"
    ]);

    grunt.registerTask("default", [
        "dev",
        "connect",
        "watch"
    ]);

};
