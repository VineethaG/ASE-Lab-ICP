'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
    .controller('View1Ctrl', function ($scope, $http) {
        $scope.display = false;
        $scope.retrieve = function () {
            $scope.display = true;
            var drugname = $scope.inputText;
            if (drugname != "") {
                $http({url: "http://127.0.0.1:3000/drug/search?searchtext=" + drugname, method: 'GET'}).then(function (data, status) {
                       $scope.drugdesc = data.data.data[0].pharmacodynamics;
                });
            }
        }


    });