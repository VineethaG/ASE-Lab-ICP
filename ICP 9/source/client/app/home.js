'use strict';

// Declare app level module which depends on views, and components
angular.module('mdb', [])
    .controller('mController', function ($scope, $http) {


        $scope.getData = function () {
            var major = $scope.majorID;
            document.getElementById('detailsDisplay').style.display = 'block';
            if (major != "") {
                $http({
                    url: "http://localhost:3000/getDetails/?major=" + major ,
                    method: 'GET'
                }).then(function (data, status) {
                    console.log(data.data[0])
                    console.log(data.data.length)
                    $scope.results = data.data.length
                    $scope.names = data.data;
                    $scope.majors = data.data;
                });
            }
        }

    })
