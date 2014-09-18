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
  $scope.subject = Subjects2014.findSubject($routeParams.subjectCode);
  $scope.mySubjects = Subjects2014.getmySubjects();

  $scope.addSubject = function(subjectInput){
    console.log(subjectInput.emnekode);
    console.log(Subjects2014.findmySubjects(subjectInput.emnekode));
    if(!Subjects2014.findmySubjects(subjectInput.emnekode)){
      Subjects2014.addmySubjects(subjectInput)
      $scope.mySubjects = Subjects2014.getmySubjects();
    }
    else{

    }
  }
  $scope.getNumberOfSubjects = function(){
    return $scope.mySubjects.length;
  }
}]);
