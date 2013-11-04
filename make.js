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
var buildDir = rootDir + "build/";
var buildTarget = buildDir + "website/";
var srcDir = rootDir + "source/";


function writeText(file, text) {
    var content = fs.writeFileSync(file, text, "utf-8");
    return content;
}


function minify() {
    var cleanCSS = require("clean-css");
    var uglifyJS = require("uglify-js");

    cd(srcDir);

    echo();
    echo("### Combining css files...");

    // pack.css
    var inCss = cat(["_static/css/bootstrap.css",
                     "_static/css/font-awesome.css",
                     "_static/css/jquery.fancybox.css",
                     "_static/css/jquery.fancybox-thumbs.css",
                     "_static/css/style.css"]);

    var minifiedCss = cleanCSS.process(inCss, {
        removeEmpty: true,
        keepSpecialComments: 0
    });

    writeText(buildTarget + "_static/css/pack.css", minifiedCss);

    echo();
    echo("### Combining js files...");

    var inJs = cat([
            "_static/js/plugins.js",
            "_static/js/bootstrap.js",
            "_static/js/jquery.mousewheel.js",
            "_static/js/jquery.fancybox.js",
            "_static/js/jquery.fancybox-thumbs.js"
        ]);

    var minifiedJs = uglifyJS.minify(inJs, {
            compress: true,
            fromString: true, // this is needed to pass JS source code instead of filenames
            mangle: true,
            warnings: false
        });

    writeText(buildTarget + "_static/js/pack.js", minifiedJs.code);

    var inJsIE = cat([
            "_static/js/html5shiv.js",
            "_static/js/respond.js"
        ]);

    var minifiedJsIE = uglifyJS.minify(inJsIE, {
            compress: true,
            fromString: true, // this is needed to pass JS source code instead of filenames
            mangle: true,
            warnings: false
        });

    writeText(buildTarget + "_static/js/html5shiv-respond.min.js", minifiedJsIE.code);

    echo();
    echo("### Build finished. The HTML pages are in" + " " + buildTarget + ".");
}


(function () {
    /*jshint -W108*/
    var SPHINXOPTS = '-d' + ' "' + buildDir + 'doctrees/' + '" "' + srcDir + '" "' + buildTarget + '"';
    /*jshint +W108*/

    //
    // make website
    //
    target.website = function () {
        cd(rootDir);
        echo();
        echo("### Building posts...");
        exec("python -u sphinxblog/gen.py");

        echo();
        echo("### Building site...");
        exec("sphinx-build -b dirhtml" + " " + SPHINXOPTS);

        echo();
        echo("### Removing files we don't need...");

        cd(buildTarget);

        var filesToRemoveFromDist = [
                ".buildinfo",
                "_static/*.css",
                "_static/*.gif",
                "_static/*.js",
                "_static/*.png",
                "_static/css/*.css",
                "_static/favicon.ico",
                "_static/js/*.js",
                "genindex",
                "objects.inv",
                "search",
                "searchindex.js"
            ];

        rm("-rf", filesToRemoveFromDist);


        echo();
        echo("### Copying files...");

        cd(srcDir);

        var filesToCopyToDist = [
                "robots.txt",
                "version.txt",
                "_static/apple-touch-icon*.png",
                "_static/favicon.ico"
            ];

        cp("-f", filesToCopyToDist, buildTarget);

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
        echo();
        echo("### Starting webserver...");
        cd(buildTarget);
        exec("python -u -m SimpleHTTPServer", { async: true });
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
