/*global module*/

module.exports = function(grunt) {

  var crypto = require('crypto');
  var currentDate = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  var id = crypto.createHash('sha1').update(currentDate + random).digest('hex');
  var globalConfig = {
    id: id
  };

  // Project configuration.
  grunt.initConfig({
    globalConfig: globalConfig,

    jekyll: {
      site: {}
    },

    includereplace: {
      dist: {
        options: {
          globals: {
            MPC_HC_VERSION_LONG: '1.7.1.0',
            MPC_HC_VERSION_SHORT: '1.7.1',
            WEBSITE_URL: 'http://mpc-hc.org',
            HASH: id
          }
        },
        files: [
          {src: '**/*.html', dest: '_site/', expand: true, cwd: '_site/'},
          {src: '*.txt', dest: '_site/', expand: true, cwd: '_site/'}
        ]
      }
    },


    csslint: {
      src: ['assets/css/style.css']
    },

    cssmin: {
      minify: {
        options: {
          keepSpecialComments: 0,
          report: 'min',
          selectorsMergeMode: 'ie8'
        },
        files: {
          '_site/assets/css/pack-<%= globalConfig.id %>.css': ['assets/css/bootstrap.css',
                                        'assets/css/font-awesome.css',
                                        'assets/css/jquery.fancybox.css',
                                        'assets/css/jquery.fancybox-thumbs.css',
                                        'assets/css/style.css']
        }
      }
    },

    uglify: {
      options: {
        /*compress: true,*/
        mangle: true,
        preserveComments: false,
        report: 'min'
      },
      minify: {
        files: {
          '_site/assets/js/pack-<%= globalConfig.id %>.js': ['assets/js/plugins.js',
                                      'assets/js/bootstrap.js',
                                      'assets/js/jquery.mousewheel.js',
                                      'assets/js/jquery.fancybox.js',
                                      'assets/js/jquery.fancybox-thumbs.js']
        }
      },
      minifyIE: {
        files: {
          '_site/assets/js/html5shiv-respond.min.js': ['assets/js/html5shiv.js',
                                                       'assets/js/respond.js']
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: '_site/',
          keepalive: true
        }
      }
    },

    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        reset: true
      },
      files: {
        src: ['_site/**/*.html']
      }
    },

    clean: {
      dist: '_site/'
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-jekyll');

  // Default task.
  grunt.registerTask('default', ['jekyll', 'includereplace', 'cssmin', 'uglify']);
  grunt.registerTask('test', ['csslint', 'validate-html']);
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

};
