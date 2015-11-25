'use strict';


// Declare app level module which depends on filters, and services
angular.module('WithMeApp', [
  'ngRoute',
  'WithMeApp.filters',
  'WithMeApp.services',
  'WithMeApp.directives',
  'WithMeApp.controllers'
])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/home', { templateUrl: 'partials/home.html', controller: 'HomeCtrl', title: 'Welcome' })
      .when('/login', { templateUrl: 'partials/login.html', controller: 'LoginCtrl', title: 'Login' })
      .otherwise({ redirectTo: '/home' });
  }])
  .run(function ($rootScope) {
    $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
      //Change page title, based on Route information
      $rootScope.title = currentRoute.title || 'Welcome!';
    });
  })
  ;
  