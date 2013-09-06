[![Build Status](https://travis-ci.org/mpc-hc/mpc-hc.org.png)](https://travis-ci.org/mpc-hc/mpc-hc.org)
[![Dependency Status](https://david-dm.org/mpc-hc/mpc-hc.org.png)](https://david-dm.org/mpc-hc/mpc-hc.org)

Getting started
---------------

* Install [node.js](http://nodejs.org/download/)
* Install the node.js dependencies: `npm install`
* Install RailsInstaller with Ruby 1.9.3 <http://railsinstaller.org/en>
* On Windows `set LANG=en_EN.UTF-8` before calling Jekyll otherwise Jekyll **will fail**
* Run `node make` or `node make website` to build the static site
* Run the webserver to test your changes: `node make server`
  (http://localhost:8000/)

You can run `npm run lint` or `npm run test` to run [JSHint](https://github.com/jshint/jshint)
and [csslint](https://github.com/stubbornella/csslint) for our files.
