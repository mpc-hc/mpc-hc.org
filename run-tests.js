#!/usr/bin/env node

/**!
 * run-tests.js, script to run JSHint and csslint for our files
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/website
 *
 * Copyright (C) 2013 MPC-HC Team
 */

require('shelljs/global');

cd(__dirname);

//
// JSHint
//
JSHINT_BIN = './node_modules/jshint/bin/jshint';

if (!test('-f', JSHINT_BIN)) {
    echo('JSHint not found. Run `npm install` in the root dir first.');
    exit(1);
}

if (exec('node' +' ' + JSHINT_BIN +' ' + 'make.js run-tests.js source/_static/js/plugins.js').code !== 0) {
    echo('*** JSHint failed! (return code != 0)');
    echo();
} else {
    echo('JSHint completed successfully');
    echo();
}


//
// csslint
//
CSSLINT_BIN = './node_modules/csslint/cli.js';

if (!test('-f', CSSLINT_BIN)) {
    echo('csslint not found. Run `npm install` in the root dir first.');
    exit(1);
}

if (exec('node' +' ' + CSSLINT_BIN +' ' + 'source/_static/css/style.css').code !== 0) {
    echo('*** csslint failed! (return code != 0)');
    echo();
}
