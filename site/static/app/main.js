/*!
 * RequireJS config.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
(function() {

'use strict';

// define console.log for IE
window.console = window.console || {};
window.console.log = window.console.log || function() {};

require.config({
  baseUrl: '/',
  paths: {
    angular: 'angular/angular',
    'angular-route': 'angular/angular-route',
    'angular-sanitize': 'angular/angular-sanitize',
    bedrock: '.',
    bootstrap: 'bootstrap/js/bootstrap',
    jquery: 'jquery/jquery',
    'jquery.placeholder': 'jquery/jquery.placeholder',
    jsonld: 'jsonld/jsonld',
    promise: 'promise/promise',
    spin: 'spin/spin',
    'ui-bootstrap': 'angular-ui/ui-bootstrap-tpls',
    'ui-utils': 'angular-ui/ui-utils',
    'ui-utils-ieshiv': 'angular-ui/ui-utils-ieshiv',
    underscore: 'underscore/underscore'
  },
  shim: {
    // export globals for non-requireJS libs
    angular: {exports: 'angular', deps: ['jquery']},
    'angular-route': {deps: ['angular']},
    'angular-sanitize': {deps: ['angular']},
    bootstrap: {deps: ['jquery']},
    jquery: {exports: 'jQuery'},
    'jquery.placeholder': {deps: ['jquery']},
    spin: {exports: 'Spinner'},
    'ui-bootstrap': {deps: ['angular']},
    'ui-utils': {deps: ['angular', 'ui-utils-ieshiv']},
    underscore: {exports: '_'}
  },
  // preload customizable app bootstrap module
  deps: ['app/bootstrap'],
  callback: function() {
    require(['app/app'], function() {});
  }
});

})();
