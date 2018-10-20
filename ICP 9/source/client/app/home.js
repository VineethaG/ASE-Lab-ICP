'use strict';

// Declare app level module which depends on views, and components
angular.module('mdb', [])
    .controller('mController', function ($scope, $http) {


        $scope.getData = function () {
            var studentID = $scope.StudentID;
            document.getElementById('detailsDisplay').style.display = 'block';

            console.log(studentID);
            // document.getElementById('div_VenueList').style.display = 'block';
            if (studentID != "") {
                $http({
                    url: "http://localhost:3000/getDetails/?studentId=" + studentID ,
                    method: 'GET'
                }).then(function (data, status) {
                    console.log(data.data[0])
                    $scope.name = data.data[0].student_Name;
                    $scope.major = data.data[0].major;
                });
            }
        }
    })
