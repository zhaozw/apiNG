module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/angular-youtube-api-factory.min.js' : ['src/angular-youtube-api-factory.js']
                }
            },
            options: {
                banner: '\n/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            }
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/angular-youtube-api-factory.js'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};