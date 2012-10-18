/*global module:false*/
module.exports = function(grunt) {

  //Import tasks
  grunt.loadNpmTasks('grunt-jslint');

  // Build configuration.
  grunt.initConfig({

    jslint: {
      files: ['public/app/*.js', 'tests/*.js']
    },

    jslint_directives: {
      sloppy: true, // Tolerate missing 'use strict' pragma
      vars: true, // Tolerate multiple vars
      white: true,
      browser: true,
      predef: [ // pre-defined globals
      'jQuery',"$",'afterEach','beforeEach', 'describe', 'expect', 'it', 'fixtures']
    },

    jslint_options: {
      //junit: 'out/junit.xml',
      // write the output to a JUnit XML
      //log: 'out/lint.log',
      errorsOnly: true // only display errors
    },

    lint: {
      files: ['grunt.js', 'public/app/*.js', 'tests/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        jquery: true,
        trailing: true,
        noempty: true
        // strict:true,
      },
      globals: {
        afterEach: false,
        beforeEach: false,
        describe: false,
        expect: false,
        it: false,
        fixtures: false
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');
};