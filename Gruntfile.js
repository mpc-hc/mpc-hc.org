"use strict";

module.exports = function(grunt) {

    var crypto = require("crypto");
    var currentDate = (new Date()).valueOf().toString();
    var random = Math.random().toString();
    var id = crypto.createHash("sha1").update(currentDate + random).digest("hex");
    var globalConfig = {
        id: id
    };

    // Project configuration.
    grunt.initConfig({
        globalConfig: globalConfig,

        // Copy files that don't need compilation to dist/
        copy: {
            dist: {
                files: [
                    // Copy any JavaScript libs
                    {dest: "_site/", src: "assets/js/jquery*.min.js", expand: true, cwd: "source/"},
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
                        HASH: id
                    }
                },
                files: [
                    {src: "**/*.html", dest: "_site/", expand: true, cwd: "_site/"}
                ]
            }
        },

        jshint: {
            options: {
                "bitwise": true,
                "boss": true,
                "browser": false,
                "camelcase": true,
                "curly": true,
                "eqeqeq": true,
                "indent": 4,
                "latedef": true,
                "multistr": true,
                "noarg": true,
                "node": true,
                "noempty": true,
                "quotmark": "double",
                "strict": true,
                "trailing": true,
                "unused": true
            },
            files: {
                src: ["Gruntfile.js", "source/assets/js/plugins.js"]
            }
        },

        csslint: {
            src: ["source/assets/css/style.css"]
        },

        cssmin: {
            minify: {
                options: {
                    keepSpecialComments: 0,
                    report: "min",
                    selectorsMergeMode: "ie8"
                },
                files: {
                    "_site/assets/css/pack-<%= globalConfig.id %>.css": ["source/assets/css/bootstrap.css",
                                                                         "source/assets/css/font-awesome.css",
                                                                         "source/assets/css/jquery.fancybox.css",
                                                                         "source/assets/css/jquery.fancybox-thumbs.css",
                                                                         "source/assets/css/style.css"]
                }
            }
        },

        uglify: {
            options: {
                /*compress: true,*/
                mangle: true,
                preserveComments: false,
                report: "min"
            },
            minify: {
                files: {
                    "_site/assets/js/pack-<%= globalConfig.id %>.js": ["source/assets/js/plugins.js",
                                                                       "source/assets/js/bootstrap.js",
                                                                       "source/assets/js/jquery.mousewheel.js",
                                                                       "source/assets/js/jquery.fancybox.js",
                                                                       "source/assets/js/jquery.fancybox-thumbs.js"]
                }
            },
            minifyIE: {
                files: {
                    "_site/assets/js/html5shiv-respond.min.js": ["source/assets/js/html5shiv.js",
                                                                 "source/assets/js/respond.js"]
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: "_site/",
                    keepalive: true
                }
            }
        },

        validation: {
            options: {
                charset: "utf-8",
                doctype: "HTML5",
                reset: true
            },
            files: {
                src: ["_site/**/*.html"]
            }
        },

        clean: {
            dist: "_site/"
        }

    });

    // These plugins provide necessary tasks.
    require("load-grunt-tasks")(grunt, {scope: "devDependencies"});

    // Default task.
    grunt.registerTask("default", ["jekyll", "copy", "includereplace", "cssmin", "uglify"]);
    grunt.registerTask("test", ["csslint", "jshint", "validate-html"]);
    grunt.registerTask("validate-html", ["jekyll", "validation"]);

};
