# The source code of <https://mpc-hc.org/>

[![Linux Build Status](https://img.shields.io/travis/mpc-hc/mpc-hc.org/master.svg?label=Linux%20build)](https://travis-ci.org/mpc-hc/mpc-hc.org)
[![Windows Build Status](https://img.shields.io/appveyor/ci/XhmikosR/mpc-hc-org/master.svg?label=Windows%20build)](https://ci.appveyor.com/project/XhmikosR/mpc-hc-org/branch/master)
[![dependencies Status](https://img.shields.io/david/mpc-hc/mpc-hc.org.svg)](https://david-dm.org/mpc-hc/mpc-hc.org)

## Getting started

* Install [Node.js](https://nodejs.org/)
* Install grunt: `npm install -g grunt-cli`
* Install the Node.js dependencies via npm: `cd mpc-hc.org` and then `npm install`
* Install Ruby and Ruby DevKit; make sure you select "Add Ruby to `PATH`", and then run:

  ```shell
  cd C:\RubyDevKit
  ruby dk.rb init
  ruby dk.rb install
  ```

* Run `gem install bundle` and then `bundle install`
* Run `grunt build` to build the static site, `grunt` to build and watch for changes (`http://localhost:8000/`). Run `grunt --help` to see all the available tasks.
