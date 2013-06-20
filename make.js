/**!
 * make.js, script to build the website for MPC-HC
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/website
 *
 * Copyright (C) 2013 MPC-HC Team
 */


require('shelljs/make');
var fs = require('fs');
var ROOT_DIR = __dirname + '/';         // absolute path to project's root
var BUILD_DIR = ROOT_DIR + 'build/';
var BUILD_TARGET = BUILD_DIR + 'website/';
var SRC_DIR = ROOT_DIR + 'source/';


function writeText(file, text) {
    'use strict';
    var content = fs.writeFileSync(file, text, 'utf-8');
    return content;
}


function minify() {
    'use strict';

    cd(SRC_DIR);
    var cleanCSS = require('clean-css');
    var UglifyJS = require('uglify-js');

    echo();
    echo("### Combining css files...");

    // pack.css
    var inCss = cat(['_static/css/bootstrap.css',
                     '_static/css/font-awesome.css',
                     '_static/css/jquery.fancybox.css',
                     '_static/css/jquery.fancybox-thumbs.css',
                     '_static/css/style.css'
    ]);

    var destCss = BUILD_TARGET + '_static/css/pack.css';
    var minifiedCss = cleanCSS.process(inCss, {
        removeEmpty: true,
        keepSpecialComments: 0
    });

    writeText(destCss, minifiedCss);

    // font-awesome-ie7.min.css

    var fontAwesomeIE7 = cleanCSS.process(cat('_static/css/font-awesome-ie7.css'), {
        removeEmpty: true,
        keepSpecialComments: 1
    });

    writeText(BUILD_TARGET + '_static/css/font-awesome-ie7.min.css', fontAwesomeIE7);

    echo();
    echo("### Combining js files...");

    var inJs = cat(['_static/js/plugins.js',
                    '_static/js/bootstrap.js',
                    '_static/js/jquery.mousewheel.js',
                    '_static/js/jquery.fancybox.js',
                    '_static/js/jquery.fancybox-thumbs.js']);

    var destJs = BUILD_TARGET + '_static/js/pack.js';
    var minifiedJs = UglifyJS.minify(inJs, {
        compress: true,
        fromString: true, // this is needed to pass JS source code instead of filenames
        mangle: true,
        warnings: false
    });

    writeText(destJs, minifiedJs.code);

    echo();
    echo('### Build finished. The HTML pages are in' + ' ' + BUILD_TARGET + '.');
}


(function () {
    'use strict';

    var SPHINXOPTS = '-d' + ' "' + BUILD_DIR + 'doctrees/' + '" "' + SRC_DIR + '" "' + BUILD_TARGET + '"';

    //
    // make website
    //
    target.website = function () {
        cd(ROOT_DIR);
        echo();
        echo("### Building posts...");
        exec('python -u sphinxblog/gen.py');

        echo();
        echo("### Building site...");
        exec('sphinx-build -b dirhtml' + ' ' + SPHINXOPTS);

        echo();
        echo("### Removing files we don't need...");

        cd(BUILD_TARGET);

        var filesToRemoveFromDist = [
            '.buildinfo',
            '_static/*.css',
            '_static/*.gif',
            '_static/*.js',
            '_static/*.png',
            '_static/img/cloudvps.png',
            '_static/css/*.css',
            '_static/favicon.ico',
            '_static/js/*.js',
            'genindex',
            'objects.inv',
            'search',
            'searchindex.js'
        ];

        rm('-rf', filesToRemoveFromDist);


        echo();
        echo("### Copying files...");

        cd(SRC_DIR);

        var filesToCopyToDist = [
            'robots.txt',
            'version.txt',
            '_static/apple-touch-icon*.png',
            '_static/favicon.ico'
        ];

        cp('-f', filesToCopyToDist, BUILD_TARGET);
        cp('-f', '_static/js/html5shiv.js', BUILD_TARGET + '_static/js');
        cp('-f', '_static/js/jquery-*.min.js', BUILD_TARGET + '_static/js');

        minify();

    };


    //
    // make clean
    //
    target.clean = function () {
        cd(ROOT_DIR);
        echo();
        echo('### Cleaning build...');
        rm('-rf', BUILD_DIR);
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
        echo('### Starting webserver...');
        cd(BUILD_TARGET);
        exec('python -u -m SimpleHTTPServer', {async: true});
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
