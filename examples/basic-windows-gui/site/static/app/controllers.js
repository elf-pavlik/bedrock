/*!
 * Controllers module.
 *
 * Copyright (c) 2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Manu Sporny
 */
define([
  'angular',
  'app/controllers/exampleController'
], function(angular) {

  'use strict';

  // register controllers and gather routes
  var module = angular.module('app.controllers', []);
  var controllers = Array.prototype.slice.call(arguments, 1);
  var routes = [];
  angular.forEach(controllers, function(controller) {
    if('controller' in controller || 'routes' in controller) {
      module.controller(controller.controller || {});
      routes.push.apply(routes, controller.routes || []);
    }
    else {
      module.controller(controller);
    }
  });

  // register routes
  module.config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
      angular.forEach(routes, function(route) {
        $routeProvider.when(route.path, route.options);
      });

      // non-route
      $routeProvider.otherwise({none: true});
    }
  ]);
});