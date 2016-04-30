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
                files: [{
                    dest: "<%= dirs.dest %>/",
                    src: "assets/js/vendor/jquery*.min.js",
                    expand: true,
                    cwd: "<%= dirs.src %>/"
                }]
            }
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
                        compatibility: "ie9",
                        keepSpecialComments: 0
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
                cwd: "<%= dirs.dest %>",
                dest: "<%= dirs.dest %>",
                src: ["**/*.html", "**/*.php"]
            }
        },

        concat: {
            css: {
                src: ["<%= dirs.src %>/assets/css/vendor/font-awesome.css",
                      "<%= dirs.src %>/assets/css/vendor/bootstrap.css",
                      "<%= dirs.src %>/assets/css/vendor/baguetteBox.css",
                      "<%= dirs.src %>/assets/css/style.css"],
                dest: "<%= dirs.dest %>/assets/css/pack.css"
            },
            js: {
                src: ["<%= dirs.src %>/assets/js/vendor/plugins.js",
                      "<%= dirs.src %>/assets/js/vendor/baguetteBox.js",
                      "<%= dirs.src %>/assets/js/vendor/bootstrap.js",
                      "<%= dirs.src %>/assets/js/img-defer.js",
                      "<%= dirs.src %>/assets/js/no-js-class.js",
                      "<%= dirs.src %>/assets/js/google-analytics.js"],
                dest: "<%= dirs.dest %>/assets/js/pack.js"
            }
        },

        uncss: {
            options: {
                ignore: [
                    /(#|\.)baguetteBox(\-[a-zA-Z]+)?/,
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
                    /\.no\-js/,
                    /\.defer/
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
                    compatibility: "ie9",
                    keepSpecialComments: 0
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
                src: "<%= dirs.dest %>/assets/css/**/*.css"
            },
            js: {
                src: [
                    "<%= dirs.dest %>/assets/js/**/*.js",
                    "!<%= dirs.dest %>/assets/js/vendor/jquery*.min.js"
                ]
            },
            images: {
                src: [
                    "<%= dirs.dest %>/assets/img/**/*.{jpg,jpeg,gif,png,svg}",
                    "!<%= dirs.dest %>/assets/img/logo-256x256.png",
                    "!<%= dirs.dest %>/assets/img/tiles/*.png"
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
                    base: "https://cdn.mpc-hc.org/",
                    html: {
                        "meta[itemprop='image']": "content",
                        "meta[property='og:image:secure_url']": "content",
                        "input[type='image']": "src"
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

        staticinline: {
            dist: {
                options: {
                    basepath: "<%= dirs.src %>/"
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
                relaxerror: ["W001", "W002", "W003"]
            },
            files: "<%= dirs.dest %>/**/*.html"
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

        accessibility: {
            options: {
                accessibilityLevel: "WCAG2AA",
                ignore: [
                    "WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Button.Name"
                ],
                reportLevels: {
                    notice: false,
                    warning: false,
                    error: true
                }
            },
            test: {
                src: "<%= dirs.dest %>/**/*.html"
            }
        },

        clean: {
            dist: "<%= dirs.dest %>/"
        }

    });

    // Load any grunt plugins found in package.json.
    require("load-grunt-tasks")(grunt, { scope: "devDependencies" });
    require("time-grunt")(grunt);

    grunt.registerTask("generate-sri", "Generate SRI hashes for our assets.", function () {

        function sriDigest(filePattern) {
            var sriToolbox = require("sri-toolbox");
            var matches = grunt.file.expand({ filter: "isFile" }, filePattern);
            var match = matches[0];     // `grunt.file.expand` returns an array
            var matchCount = matches.length;
            var integrity = "";

            if (matchCount === 0) {
                grunt.fail.fatal("Generating SRI failed; didn't find any matches!");
            } else if (matchCount > 1) {
                // shouldn't really happen since we clean the "_site" directory
                grunt.fail.fatal("Generating SRI failed; Found more than one matches!");
            }

            try {
                integrity = sriToolbox.generate({ algorithms: ["sha384"] }, grunt.file.read(match));
            } catch (err) {
                grunt.log.error(err);
                grunt.fail.fatal("Generating SRI hash failed.");
            }

            grunt.log.ok("Generated SRI hash for " + match.cyan + ".");
            return integrity;

        }

        var packCssIntegrity = sriDigest("_site/assets/css/pack.*.css");
        var packJsIntegrity = sriDigest("_site/assets/js/pack.*.js");

        grunt.config("includereplace", {
            dist: {
                options: {
                    globals: {
                        packCssIntegrity: packCssIntegrity,
                        packJsIntegrity: packJsIntegrity
                    }
                },
                files: [{
                    src: ["**/*.html", "**/*.php"],
                    dest: "<%= dirs.dest %>/",
                    expand: true,
                    cwd: "<%= dirs.dest %>/"
                }]
            }
        });

    });

    grunt.registerTask("build", [
        "clean",
        "jekyll",
        "useminPrepare",
        "copy",
        "staticinline",
        "concat",
        "uncss",
        "cssmin",
        "uglify",
        "filerev",
        "usemin",
        "generate-sri",
        "includereplace",
        "cdnify",
        "htmlmin"
    ]);

    grunt.registerTask("test", [
        "build",
        "csslint",
        "bootlint",
        "jshint",
        "htmllint",
        "accessibility"
    ]);

    grunt.registerTask("dev", [
        "jekyll",
        "useminPrepare",
        "copy",
        "staticinline",
        "concat",
        "filerev",
        "usemin",
        "generate-sri",
        "includereplace"
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
