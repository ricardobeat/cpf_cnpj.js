var flour = require('flour')

module.exports = function(grunt) {

    grunt.registerTask('lint', function () {
        flour.linters.js.options = { laxcomma: true }
        lint('lib/**/*.js', this.async());
    });

    grunt.registerTask('build', function () {
        bundle([
            'lib/cpf.js'
          , 'lib/cnpj.js'
        ], 'build/cpf_cnpj.js', this.async());
    });

    grunt.registerTask('default', ['lint', 'build']);

};
