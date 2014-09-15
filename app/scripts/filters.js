angular.module('Filters', []).filter('searchFor', function () {
    return function (arr, searchString, radio) {
        if (!searchString) {
            return arr;
        }
                var result = [];
        searchString = searchString.toLowerCase();
        if(radio=="emnekode" || radio=="terminkode"){
        angular.forEach(arr, function (subject) {
            if (subject[radio].toLowerCase().indexOf(searchString) !== -1) {
                result.push(subject);
            }
            
        });
        }
        else{
            angular.forEach(arr, function (subject) {
               if (subject[radio] == searchString) {
                result.push(subject);
            } 
             });
        }
        
    
        return result;
    };
});