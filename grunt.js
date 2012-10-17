/*global module:false*/
module.exports = function(grunt) {
  
  // Build configuration.
  grunt.initConfig({
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
        trailing:true,
        noempty:true
        // strict:true,
      },
      globals: {
        afterEach: false,
        beforeEach: false,
        describe: false,
        expect: false,
        it: false
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');
};