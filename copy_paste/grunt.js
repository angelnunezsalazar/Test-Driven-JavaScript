/*global module:false*/
module.exports = function(grunt) {

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
    }
  });

  grunt.registerTask('default', 'concat min');
};