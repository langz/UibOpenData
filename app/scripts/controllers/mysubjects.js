'use strict';

/**
* @ngdoc function
* @name uibOpenDataApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the uibOpenDataApp
*/
angular.module('uibOpenDataApp')
.controller('MySubjectsCtrl', ['$scope','$location', 'Subjects2014', function ($scope, $location, Subjects2014) {
  $scope.subjects = [];
  $scope.radio = 'emnekode';
  $scope.orderByField = 'emnekode';
  $scope.reverseSort = false;
  $scope.subjects = Subjects2014.getmySubjects();

  $scope.getNumberOfSubjects = function(){
    return $scope.subjects.length;
  }
  $scope.goToSubject = function (subjectCode) {
    $location.url('/subject/' + subjectCode);
  }
  $scope.removeSubject = function(subjectInput){
    Subjects2014.removemySubjects(subjectInput)
    $scope.mySubjects = Subjects2014.getmySubjects();
  }
}]);
