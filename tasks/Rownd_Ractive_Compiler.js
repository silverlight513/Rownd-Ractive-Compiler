/*
 * grunt-Rownd-Ractive-Compiler
 * https://github.com/silverlight513/Rownd-Ractive-Compiler
 *
 * Copyright (c) 2016 Jack Rimell
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var Ractive = require('ractive');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('rownd_compile', 'A grunt task to translate handlebars files into ractive objects for the Rownd.js project', function() {
    function parse(template){
      var name = path.basename(template, '.handlebars'),
          html = grunt.file.read(template),
          parsed = Ractive.parse(html);

      return  '\t' + name + ': ' + JSON.stringify(parsed);
    }

    this.files.forEach(function(file){
        var templates = file.src.map(parse);
        grunt.file.write(file.dest,
            'Rownd.templates = {\n' + templates.join(',\n') + '\n}');
    });
  });

};
