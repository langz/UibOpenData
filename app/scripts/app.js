'use strict';

/**
* @ngdoc overview
* @name uibOpenDataApp
* @description
* # uibOpenDataApp
*
* Main module of the application.
*/
angular
.module('uibOpenDataApp', [
'ngAnimate',
'ngCookies',
'ngResource',
'ngRoute',
'ngSanitize',
'ngTouch',
'Services',
'Filters'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/subject/:subjectCode', {
    templateUrl: 'views/about.html',
    controller: 'SubjectCtrl'
  })
  .when('/mySubjects', {
    templateUrl: 'views/mySubjects.html',
    controller: 'MySubjectsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
