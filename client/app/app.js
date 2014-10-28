'use strict';

angular.module('pulpApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angular-redactor'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');
    //redactorOptions.buttons = ['formatting', '|', 'bold', 'italic'];
    $locationProvider.html5Mode(true);
});
