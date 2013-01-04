/**!
 * make.js, script to build the website for MPC-HC
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/website
 *
 * Copyright (C) 2013 MPC-HC Team
 */

/* jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
   camelcase:true, trailing:true, strict:true, boss:true, unused:true,
   curly:true, indent:4, maxerr:100 */
/*global cd, cp, target, echo, cat, exec, pushd, popd, rm, require, __dirname */

(function () {
    'use strict';

    require('shelljs/make');
    var fs = require('fs');
    var cleanCSS = require('clean-css');
    var UglifyJS = require('uglify-js');

    var ROOT_DIR = __dirname + '/',         // absolute path to project's root
        BUILD_DIR = ROOT_DIR + 'build/',
        BUILD_TARGET = BUILD_DIR + 'website/',
        SRC_DIR = ROOT_DIR + 'source/',
        SPHINXOPTS = '-d' + ' ' + BUILD_DIR + '/doctrees' + ' ' + SRC_DIR + ' ' + BUILD_TARGET;

    //
    // make all
    //
    target.all = function () {
        target.website();
    };

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
            '_static/css/*.css',
            '_static/favicon.ico',
            '_static/js/*.js',
            'genindex',
            'objects.inv',
            'search',
            'searchindex.js'];

        rm('-rf', filesToRemoveFromDist);

        popd();


        echo();
        echo("### Copying files...");

        pushd(SRC_DIR);

        cp('-f', '.htaccess', BUILD_TARGET);
        cp('-f', '_static/apple-touch-icon*.png', BUILD_TARGET);
        cp('-f', '_static/favicon.ico', BUILD_TARGET);
        cp('-f', '_static/js/jquery-*.min.js', BUILD_TARGET + '_static/js');
        cp('-f', 'robots.txt', BUILD_TARGET);
        cp('-f', 'version.txt', BUILD_TARGET);

        echo();
        echo("### Combining css files...");

        var inCss = cat(['_static/css/bootstrap.css',
                         '_static/css/bootstrap-responsive.css',
                         '_static/css/jquery.fancybox.css',
                         '_static/css/jquery.fancybox-thumbs.css',
                         '_static/css/style.css']);

        var outCss = BUILD_TARGET + '_static/css/pack.css';
        var minifiedCss = cleanCSS.process(inCss, {
                            removeEmpty: true,
                            keepSpecialComments: 0});

        fs.writeFileSync(outCss, minifiedCss, 'utf8');

        //exec('cleancss -o' + ' ' + outCss + ' ' + inCss + ' ' + '--s0');

        echo();
        echo("### Combining js files...");

        var inJs = ['_static/js/plugins.js',
                    '_static/js/bootstrap.js',
                    '_static/js/jquery.mousewheel.js',
                    '_static/js/jquery.fancybox.js',
                    '_static/js/jquery.fancybox-thumbs.js'];

        var outJs = BUILD_TARGET + '_static/js/pack.js';
        var minifiedJs = UglifyJS.minify(inJs, {
                            warnings: false,
                            mangle: true});

        fs.writeFileSync(outJs, minifiedJs.code, 'utf8');
        //exec('uglifyjs' + ' ' + inJs.join(' ') + ' -o' + ' ' + outJs + --compress --mangle');


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
        cd(ROOT_DIR);
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
