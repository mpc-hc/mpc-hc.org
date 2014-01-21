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
            dist: {
                src: ["<%= dirs.src %>/assets/css/bootstrap.css",
                      "<%= dirs.src %>/assets/css/font-awesome.css",
                      "<%= dirs.src %>/assets/css/jquery.fancybox.css",
                      "<%= dirs.src %>/assets/css/jquery.fancybox-thumbs.css",
                      "<%= dirs.src %>/assets/css/style.css"],
                dest: "<%= dirs.dest %>/assets/css/pack-<%= hash %>.css"
            }
        },

        uncss: {
            options: {
                stylesheets: ["../../../../../<%= concat.dist.dest %>"]
            },
            dist: {
                src: "<%= dirs.dest %>/**/*.html",
                dest: "<%= concat.dist.dest %>"
            }
        },

        cssmin: {
            minify: {
                options: {
                    keepSpecialComments: 0,
                    report: "min",
                    selectorsMergeMode: "ie8"
                },
                files: {
                    "<%= uncss.dist.dest %>": "<%= concat.dist.dest %>"
                }
            }
        },

        uglify: {
            options: {
                /*compress: true,*/     //this is enabled by default; commented out so that the warnings don't show up
                mangle: true,
                preserveComments: false,
                report: "min"
            },
            minify: {
                files: {
                    "<%= dirs.dest %>/assets/js/pack-<%= hash %>.js": ["<%= dirs.src %>/assets/js/plugins.js",
                                                                       "<%= dirs.src %>/assets/js/bootstrap.js",
                                                                       "<%= dirs.src %>/assets/js/jquery.mousewheel.js",
                                                                       "<%= dirs.src %>/assets/js/jquery.fancybox.js",
                                                                       "<%= dirs.src %>/assets/js/jquery.fancybox-thumbs.js"]
                }
            },
            minifyIE: {
                files: {
                    "<%= dirs.dest %>/assets/js/html5shiv-respond.min.js": ["<%= dirs.src %>/assets/js/html5shiv.js",
                                                                            "<%= dirs.src %>/assets/js/respond.js"]
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
            tasks: "build",
            options: {
                livereload: true
            }
        },

        csslint: {
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

    grunt.registerTask("default", [
        "build",
        "connect",
        "watch"
    ]);

};
