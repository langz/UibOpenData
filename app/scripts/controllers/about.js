'use strict';

/**
 * @ngdoc function
 * @name uibOpenDataApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uibOpenDataApp
 */
angular.module('uibOpenDataApp')
  .controller('SubjectCtrl', ['$scope','$routeParams', 'Subjects2014', function ($scope, $routeParams, Subjects2014) {
   
   console.log($routeParams.subjectCode);
   console.log(Subjects2014.findSubject($routeParams.subjectCode));
 }]);
