# grunt-Rownd-Ractive-Compiler

> A grunt task to translate handlebars files into ractive objects for the Rownd.js project

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-Rownd-Ractive-Compiler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-Rownd-Ractive-Compiler');
```

## The "rownd_compile" task

### Overview
In your project's Gruntfile, add a section named `rownd_compile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rownd_compile: {
    template: {
      src: '*.handlebars',
      dest: 'dist/templates.js'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 - initial working release v2.0.0
 - updated readme and tweaks v2.0.1