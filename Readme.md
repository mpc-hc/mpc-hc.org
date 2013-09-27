[![Dependency Status](https://gemnasium.com/mpc-hc/mpc-hc.org.png)](https://gemnasium.com/mpc-hc/mpc-hc.org)
[![Build Status](https://travis-ci.org/mpc-hc/mpc-hc.org.png)](https://travis-ci.org/mpc-hc/mpc-hc.org)

Getting started
---------------

* Install [Python](http://www.python.org/) (tested with 2.7.3)
* Install [Python setuptools](http://pypi.python.org/pypi/setuptools#files)
* Install [Python pip](http://www.pip-installer.org/en/latest/installing.html#alternative-installation-procedures)
* Install Sphinx: `pip install Sphinx`
* Install [node.js](http://nodejs.org/download/)
* Install the node.js dependencies: `npm install`
* On Windows: `SET PATH=C:\Python27;C:\Python27\Scripts;%PATH%`
* Run `node make` or `node make website` to build the static site
* Run the Python webserver to test your changes: `node make server`
  (http://localhost:8000/)

You can run `npm run check` or `npm run test` to run [JSHint](https://github.com/jshint/jshint)
and [csslint](https://github.com/stubbornella/csslint) for our files.
