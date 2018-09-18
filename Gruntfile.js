module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                   
                    { src: ['bower_components/bootstrap/**'], dest: 'src/lib/' },
                    { src: ['bower_components/angular-route/**'], dest: 'src/lib/' },
                    { src: ['bower_components/angular/**'], dest: 'src/lib/' }

                ],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy']);

};