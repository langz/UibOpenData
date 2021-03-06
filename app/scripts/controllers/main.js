'use strict';

/**
* @ngdoc function
* @name uibOpenDataApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the uibOpenDataApp
*/
angular.module('uibOpenDataApp')
.controller('MainCtrl', ['$scope','$location', 'Subjects2014', function ($scope, $location, Subjects2014) {
  $scope.mySubjects = Subjects2014.getmySubjects();
  $scope.radio = 'emnekode';
  $scope.orderByField = 'emnekode';
  $scope.reverseSort = false;
  $scope.subjects = [];
  console.log("stre: " + $scope.mySubjects.length);

  if(Subjects2014.getSubjects().length==0){

    Subjects2014.populate2014V(function (result) {
      angular.forEach(result,function(item) {
        item.arstall = parseInt(item.arstall);
        item.studienivakode = parseInt(item.studienivakode);
        item.studiepoeng = parseFloat(item.studiepoeng.replace(',','.'));
        $scope.subjects.push(item);
        Subjects2014.addSubjects(item);
      });
    });
    Subjects2014.populate2014H(function (result) {
      angular.forEach(result,function(item) {
        item.arstall = parseInt(item.arstall);
        item.studienivakode = parseInt(item.studienivakode);
        item.studiepoeng = parseFloat(item.studiepoeng.replace(',','.'));
        $scope.subjects.push(item);
        Subjects2014.addSubjects(item);
      });
    });



  }
  else{
    $scope.subjects = Subjects2014.getSubjects();
  }

  $scope.goToSubject = function (subjectCode) {
    $location.url('/subject/' + subjectCode);
  }
  $scope.getNumberOfSubjects = function(){
    return $scope.mySubjects.length;
  }
  $scope.addSubject = function(subjectInput){
    if(!Subjects2014.findmySubjects(subjectInput.emnekode)){
      Subjects2014.addmySubjects(subjectInput)
      $scope.mySubjects = Subjects2014.getmySubjects();
    }
    else{
    }
  }
}]);
