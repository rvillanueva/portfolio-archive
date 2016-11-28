'use strict';

/**
 * @ngdoc overview
 * @name ryanApp
 * @description
 * # ryanApp
 *
 * Main module of the application.
 */
angular
  .module('ryanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'routes/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects/:projectId', {
        templateUrl: 'routes/project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
