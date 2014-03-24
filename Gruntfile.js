module.exports = function(grunt) {
  global.grunt = grunt;

  // Project configuration.
  grunt.initConfig({
     watch: {
      gruntfile: {
        files: 'Gruntfile.js',
      },
      src: {
        files: ['lib/*.js', 'css/**/*.scss', '!lib/dontwatch.js'],
        tasks: ['default'],
      },
    },

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.registerTask('server', 'run web server', function() {
    var app = require('./server/serviceMain');
    app.run();
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['server', 'watch']);

};