'use strict';

// Defines rpwServices, to use for retrieving the testdata
var uibServices = angular.module('Services', ['ngResource']);


uibServices.factory('Subjects2014', function ($http) {

  var subjects = [];

  var mySubjects = [];

  var getmySubjects = function(){
    return mySubjects;
  }
  var addmySubjects = function(subject){
    mySubjects.push(subject);
  }
  var removemySubjects = function(subject){
    var index = mySubjects.indexOf(subject);
    if (index > -1) {
      mySubjects.splice(index, 1);
    }
  }
  var findmySubjects = function(subjectCode){
    var response =false;
    angular.forEach(mySubjects,function(subjectElem) {
      if(subjectElem.emnekode===subjectCode){
        response = true;
      }
    });
    return response;
  }
  var getSubjects = function(){
    return subjects;
  }
  var addSubjects = function(subject){
    subjects.push(subject);
  }
  var findSubject = function(subjectCode){
    var subject = {};
    if(subjects.length===0){
      console.log("EMPTY");
    }

    angular.forEach(subjects,function(subjectElem) {
      if(subjectElem.emnekode===subjectCode){
        subject = subjectElem;
      }
    });
    return subject;
  }

  // List function retrieves the ansatte.json file, which contain a list of all employees
  var populate2014V = function (callback) {
    $http({
      method: 'GET',
      url: 'data/2014V.json',
      cache: true
    }).success(callback);
  }
  var populate2014H = function (callback) {
    $http({
      method: 'GET',
      url: 'data/2014H.json',
      cache: true
    }).success(callback);
  }
  return {
    populate2014V: populate2014V,
    populate2014H: populate2014H,
    getSubjects: getSubjects,
    addSubjects: addSubjects,
    findSubject: findSubject,
    getmySubjects: getmySubjects,
    addmySubjects: addmySubjects,
    removemySubjects: removemySubjects,
    findmySubjects: findmySubjects
  };
});
