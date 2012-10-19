/*global module:false*/
module.exports = function(grunt) {

  //Import tasks
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    concat: {
      "public/app/script.js": ["public/app/*.js"]
    },

    min: {
      "public/app/script.min.js": ["public/app/script.js"]
    },

    exec: {
      publish: {
        command: 'jitsu deploy',
        stdout: true
      }
    }
  });

  grunt.registerTask('deploy', 'concat min bump:patch exec:publish');
};