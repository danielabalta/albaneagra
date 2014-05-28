// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {
    "vendor": "../vendor",
    "almond": "../vendor/bower/almond/almond",
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",
    "jquery": "../vendor/bower/jquery/dist/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
    "albaneagra": "./modules/views/albaneagra"
  },
  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
        // These are the two hard dependencies that will be loaded first.
        deps: ["jquery", "underscore"],

        // This maps the global `Backbone` object to `require("backbone")`.
        exports: "Backbone"
    }
  }
});
