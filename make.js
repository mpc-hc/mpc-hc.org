/**!
 * make.js, script to build the website for MPC-HC
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/mpc-hc.org
 *
 * Copyright (C) 2013 MPC-HC Team
 */

"use strict";

require("shelljs/make");
var fs = require("fs");
var rootDir = __dirname + "/";         // absolute path to project's root
var buildDir = rootDir + "_site/";


function writeText(file, text) {
    var content = fs.writeFileSync(file, text, "utf-8");
    return content;
}


function minify() {
    var CleanCSS = require("clean-css");
    var uglifyJS = require("uglify-js");

    echo();
    echo("### Combining css files...");

    // pack.css
    var inCss = cat([
            "assets/css/bootstrap.css",
            "assets/css/font-awesome.css",
            "assets/css/jquery.fancybox.css",
            "assets/css/jquery.fancybox-thumbs.css",
            "assets/css/style.css"
        ]);

    var minifier = new CleanCSS({
            debug: true,
            keepSpecialComments: 0,
            selectorsMergeMode: "ie8"
        });

    writeText(buildDir + "assets/css/pack.css", minifier.minify(inCss));

    echo();
    echo("Original: " + minifier.stats.originalSize + " bytes");
    echo("Minified: " + minifier.stats.minifiedSize + " bytes");
    /*jshint -W052*/
    echo("Efficiency: " + ~~(minifier.stats.efficiency * 10000) / 100.0 + "%");
    /*jshint +W052*/
    echo("Time spent: " + minifier.stats.timeSpent + "ms");

    echo();
    echo("### Combining js files...");

    var inJs = cat([
            "assets/js/plugins.js",
            "assets/js/bootstrap.js",
            "assets/js/jquery.mousewheel.js",
            "assets/js/jquery.fancybox.js",
            "assets/js/jquery.fancybox-thumbs.js"
        ]);

    var minifiedJs = uglifyJS.minify(inJs, {
            compress: true,
            fromString: true, // this is needed to pass JS source code instead of filenames
            mangle: true,
            warnings: false
        });

    writeText(buildDir + "assets/js/pack.js", minifiedJs.code);

    var inJsIE = cat([
            "assets/js/html5shiv.js",
            "assets/js/respond.js"
        ]);

    var minifiedJsIE = uglifyJS.minify(inJsIE, {
            compress: true,
            fromString: true, // this is needed to pass JS source code instead of filenames
            mangle: true,
            warnings: false
        });

    writeText(buildDir + "assets/js/html5shiv-respond.min.js", minifiedJsIE.code);
}


(function () {
    //
    // make website
    //
    target.website = function () {
        cd(rootDir);
        //echo();
        exec("jekyll build");

        echo();
        echo("### Removing files we don't need...");

        cd(buildDir);

        var filesToRemoveFromDist = [
                "*.css",
                "*.gif",
                "*.js",
                "*.png",
                "assets/css/*.css",
                "favicon.ico",
                "assets/js/*.js"
            ];

        rm("-rf", filesToRemoveFromDist);


        echo();
        echo("### Copying files...");

        cd("../");
        var filesToCopyToDist = [
                "apple-touch-icon-precomposed.png",
                "favicon.ico",
                "robots.txt",
                "version.txt"
            ];

        cp("-f", filesToCopyToDist, buildDir);
        cp("-f", ["assets/js/jquery-*.min.js"], buildDir + "assets/js");

        minify();

    };


    //
    // make clean
    //
    target.clean = function () {
        cd(rootDir);
        echo();
        echo("### Cleaning build...");
        rm("-rf", buildDir);
    };


    //
    // make all
    //
    target.all = function () {
        target.website();
    };


    //
    // make rebuild
    //
    target.rebuild = function () {
        target.clean();
        target.website();
    };


    //
    // make server
    //
    target.server = function () {
        //echo();
        //echo("### Starting Jekyll's webserver...");
        exec("jekyll serve", { async: true });
        target.website();
    };


    //
    // make help
    //
    target.help = function () {
        echo("Available targets:");
        echo("  website  builds the website");
        echo("  server   starts the webserver");
        echo("  clean    cleans the built website");
        echo("  rebuild  rebuilds the website");
        echo("  help     shows this help message");
    };

}());
