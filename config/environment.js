/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    
    firebase: {
      apiKey: 'AIzaSyDT85Xoiv8KfYMI1bpH7yDnQ3pJ7zyfF-I',
      authDomain: 'super-rentals-cae42.firebaseapp.com',
      databaseURL: 'https://super-rentals-cae42.firebaseio.com',
      storageBucket: 'super-rentals-cae42.appspot.com',
    },
    modulePrefix: 'super-rentals',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
