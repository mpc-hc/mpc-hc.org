#!/usr/bin/env node

/**!
 * run-tests.js, script to run JSHint and csslint for our files
 * Released under the terms of MIT license
 *
 * https://github.com/mpc-hc/website
 *
 * Copyright (C) 2013 MPC-HC Team
 */

require("shelljs/global");

cd(__dirname);

//
// JSHint
//
jshintBin = "./node_modules/jshint/bin/jshint";

if (!test("-f", jshintBin)) {
    echo("JSHint not found. Run `npm install` in the root dir first.");
    exit(1);
}

if (exec("node" + " " + jshintBin + " " + "make.js run-tests.js source/_static/js/plugins.js").code !== 0) {
    echo("*** JSHint failed! (return code != 0)");
    echo();
} else {
    echo("JSHint completed successfully");
    echo();
}


//
// csslint
//
csslintBin = "./node_modules/csslint/cli.js";

if (!test("-f", csslintBin)) {
    echo("csslint not found. Run `npm install` in the root dir first.");
    exit(1);
}

// csslint doesn't return proper error codes...
/*if (exec("node" + " " + csslintBin + " " + "source/_static/css/style.css").code !== 0) {
    echo("*** csslint failed! (return code != 0)");
    echo();
} else {
    echo("csslint completed successfully");
    echo();
}*/
exec("node" +" " + csslintBin + " " + "source/_static/css/style.css");
