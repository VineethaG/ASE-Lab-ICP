'use strict';

// Declare app level module which depends on views, and components
angular.module('demoMongo', [])
    .controller('MongoRestController', function ($scope, $http) {


        $scope.insertData = function () {
            var studentID = $scope.formData.ID;
            var studentName = $scope.formData.studentName;
            var COS = $scope.formData.COS;
            var major = $scope.formData.major;
            var minor = $scope.formData.minor;
            // document.getElementById('div_VenueList').style.display = 'block';
            if (studentID != "" && studentName != "" && COS != ""&& major != ""& minor != "") {
                $http({
                    url: "http://localhost:3000/register/?studentId=" + studentID + "&studentName="+ studentName+ "&COS="+ COS +"&major="+ major+"&minor="+ minor,
                    method: 'POST'
                }).then(function (data, status) {
                        alert("Successfully saved the details");
                        window.location.href = 'home.html';

                });
            }
        }


    })
