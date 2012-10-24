/*global module:false*/
module.exports = function(grunt) {

  //Import tasks
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    concat: {
      app: {
        src: ["public/app/*.js"],
        dest: "output/dist/app.js"
      },
      vendor: {
        src: ["public/lib/*.min.js"],
        dest: "public/lib/vendor.min.js"
      }
    },

    min: {
      app: {
        src: ["output/dist/app.js"],
        dest: "public/app/app.min.js"
      }
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