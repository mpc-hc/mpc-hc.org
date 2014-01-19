[![Build Status](https://travis-ci.org/mpc-hc/mpc-hc.org.png)](https://travis-ci.org/mpc-hc/mpc-hc.org)
[![devDependency Status](https://david-dm.org/mpc-hc/mpc-hc.org/dev-status.png?theme=shields.io)](https://david-dm.org/mpc-hc/mpc-hc.org#info=devDependencies)

# Getting started

* Install [Node.js](http://nodejs.org/download/)
* Install grunt: `npm install -g grunt-cli`
* Install the Node.js dependencies via npm: `npm install`
* Install RailsInstaller with Ruby 1.9.3 <http://railsinstaller.org/en>
* On Windows do `@CHCP 65001` before calling Jekyll otherwise Jekyll **will fail**.
  Hint: you can add this line in `jekyll.cmd` so that you don't have to call it
  every time yourself.
* Run `gem install jekyll kramdown` (Note that Jekyll v1.4.3 is broken on Windows, use `gem install jekyll -v "=1.4.2")
* Run `grunt build` to build the static site, `grunt` to build and watch for changes (http://localhost:8000/)
