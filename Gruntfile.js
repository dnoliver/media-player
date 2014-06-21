module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

	'http-server': {

      'dev': {

        // the server root directory
        root: '.',

        port: 8080,
        // port: function() { return 80; }

        host: "127.0.0.1",

        cache: 30,
        showDir : true,
        autoIndex: true,
        defaultExt: 'html',

        // run in parallel with other tasks
        runInBackground: false
      }
    },
    
    mocha_phantomjs: {
      all: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

  // Default task(s).
  grunt.registerTask('server', ['http-server:dev']);
  grunt.registerTask('test', ['mocha_phantomjs:all']);
};
