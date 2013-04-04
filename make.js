/**!
 * make.js, script to build the website for MPC-HC
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/website
 *
 * Copyright (C) 2013 MPC-HC Team
 */

(function () {
    'use strict';

    require('shelljs/make');
    var fs = require('fs'),
        cleanCSS = require('clean-css'),
        UglifyJS = require('uglify-js'),

        ROOT_DIR = __dirname + '/',         // absolute path to project's root
        BUILD_DIR = ROOT_DIR + 'build/',
        BUILD_TARGET = BUILD_DIR + 'website/',
        SRC_DIR = ROOT_DIR + 'source/',
        SPHINXOPTS = '-d' + ' "' + BUILD_DIR + 'doctrees/' + '" "' + SRC_DIR + '" "' + BUILD_TARGET + '"';


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

        pushd(BUILD_TARGET);

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

        popd();


        echo();
        echo("### Copying files...");

        pushd(SRC_DIR);

        var filesToCopyToDist = [
            'robots.txt',
            'version.txt',
            '_static/apple-touch-icon*.png',
            '_static/favicon.ico'
        ];

        cp('-f', filesToCopyToDist, BUILD_TARGET);
        cp('-f', '_static/js/html5shiv.js', BUILD_TARGET + '_static/js');
        cp('-f', '_static/js/jquery-*.min.js', BUILD_TARGET + '_static/js');

        echo();
        echo("### Combining css files...");

        var inCss = cat(['_static/css/bootstrap.css',
                         '_static/css/jquery.fancybox.css',
                         '_static/css/jquery.fancybox-thumbs.css',
                         '_static/css/style.css'
        ]);

        var outCss = BUILD_TARGET + '_static/css/pack.css';
        var minifiedCss = cleanCSS.process(inCss, {
            removeEmpty: true,
            keepSpecialComments: 0
        });

        fs.writeFileSync(outCss, minifiedCss, 'utf8');

        echo();
        echo("### Combining js files...");

        var inJs = cat(['_static/js/plugins.js',
                        '_static/js/bootstrap.js',
                        '_static/js/jquery.mousewheel.js',
                        '_static/js/jquery.fancybox.js',
                        '_static/js/jquery.fancybox-thumbs.js']);

        var outJs = BUILD_TARGET + '_static/js/pack.js';
        var minifiedJs = UglifyJS.minify(inJs, {
            compress: true,
            fromString: true, // this is needed to pass JS source code instead of filenames
            mangle: true,
            warnings: false
        });

        fs.writeFileSync(outJs, minifiedJs.code, 'utf8');

        echo();
        echo('### Build finished. The HTML pages are in' + ' ' + BUILD_TARGET + '.');

        popd();
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
