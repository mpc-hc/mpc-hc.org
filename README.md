[![Build Status](https://travis-ci.org/mpc-hc/mpc-hc.org.png)](https://travis-ci.org/mpc-hc/mpc-hc.org)
[![devDependency Status](https://david-dm.org/mpc-hc/mpc-hc.org/dev-status.png?theme=shields.io)](https://david-dm.org/mpc-hc/mpc-hc.org#info=devDependencies)

# Getting started

* Install [node.js](http://nodejs.org/download/)
* Install grunt: `npm install -g grunt-cli`
* Install the node.js dependencies: `npm install`
* Install RailsInstaller with Ruby 1.9.3 <http://railsinstaller.org/en>
* On Windows do `@CHCP 65001` before calling Jekyll otherwise Jekyll **will fail**.
  Hint: you can add this line in `jekyll.cmd` so that you don't have to call it
  every time yourself.
* Run `grunt` to build the static site
* Run the webserver to test your changes: `grunt connect`
  (http://localhost:8000/)
