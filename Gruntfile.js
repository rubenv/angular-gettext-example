'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        nggettext_extract: {
            pot: {
                files: {
                    'po/template.pot': ['*.html']
                }
            },
        },

        nggettext_compile: {
            all: {
                'js/translations.js': ['po/*.po']
            },
        },
    });

    grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('default', ['nggettext_extract', 'nggettext_compile']);
};
