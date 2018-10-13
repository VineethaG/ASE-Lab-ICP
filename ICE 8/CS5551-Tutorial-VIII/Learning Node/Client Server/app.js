'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList;
        $scope.mostRecentReview;
        $scope.issues =  [{"ID":170,"Name":"Abortion"},{"ID":509,"Name":"Accumulation of fluid in the scrotum"},{"ID":113,"Name":"Acute inflammation of lung"},{"ID":495,"Name":"Bloated belly"},{"ID":211,"Name":"Chronic tiredness syndrome"},{"ID":80,"Name":"Cold"},{"ID":53,"Name":"Constipation"},{"ID":86,"Name":"Coronary heart disease"},{"ID":47,"Name":"Depression"},{"ID":266,"Name":"Disturbed testicular descent"},{"ID":431,"Name":"Drug side effect"},{"ID":237,"Name":"Erection problems"},{"ID":181,"Name":"Excessive feeling of fear"},{"ID":11,"Name":"Flu"},{"ID":281,"Name":"Food poisoning"},{"ID":107,"Name":"German measles"},{"ID":104,"Name":"Headache"},{"ID":87,"Name":"Heart attack"},{"ID":434,"Name":"Heart racing"},{"ID":130,"Name":"Hernia"},{"ID":209,"Name":"Huntington's disease"},{"ID":15,"Name":"Hypersensitivity reaction"},{"ID":83,"Name":"Inflammation of the brain covering membranes"},{"ID":235,"Name":"Inflammation of the epididymis"},{"ID":44,"Name":"Inflammation of the nose and throat"},{"ID":504,"Name":"Inflammation of the prostate"},{"ID":331,"Name":"Inflammation of the testes"},{"ID":131,"Name":"Joint infection"},{"ID":324,"Name":"Kidney stones"},{"ID":109,"Name":"Kissing disease"},{"ID":166,"Name":"Listeria infection"},{"ID":51,"Name":"Loose watery stools"},{"ID":79,"Name":"Lyme disease"},{"ID":357,"Name":"Malignant prostate cancer"},{"ID":50,"Name":"Menopause"},{"ID":489,"Name":"Menstrual cramps"},{"ID":347,"Name":"Narrowing of foreskin"},{"ID":167,"Name":"Obstruction of a pulmonary artery"},{"ID":446,"Name":"Pregnancy"},{"ID":18,"Name":"Reflux disease"},{"ID":376,"Name":"Scarlet fever"},{"ID":68,"Name":"Shaking palsy"},{"ID":67,"Name":"Sick headache"},{"ID":103,"Name":"Slipped disc"},{"ID":19,"Name":"Smoking"},{"ID":510,"Name":"Sperm cyst"},{"ID":476,"Name":"Stomach bleeding"},{"ID":488,"Name":"Strain of the back muscles"},{"ID":151,"Name":"Torsion of testes"},{"ID":497,"Name":"Tubal and ovarian inflammation"},{"ID":59,"Name":"Urinary tract infection"}];
        $scope.getVenues = function () {
            // var placeEntered = document.getElementById("txt_placeName").value;
            //placeEntered = parseInt(placeEntered);
            var placeEntered = $scope.issueid;
            if (placeEntered != null && placeEntered != "") {
                document.getElementById('div_ReviewList').style.display = 'none';
                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://sandbox-healthservice.priaid.ch/issues/"+placeEntered+"/info?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im5hZ2FzaXJpc2hhMTIwNkBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjI4OTMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTgtMDItMjMiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTUyMDY1OTc4MSwibmJmIjoxNTIwNjUyNTgxfQ.09HQJdlWOhIdENJrCfM7DZfAZ86k6tVh8m7LqllVOcg&language=en-gb&format=json");
                handler.success(function (data) {
                    console.log(data);
                    $scope.desc = data.DescriptionShort;
                    $scope.treatmentdesc = data.TreatmentDescription;
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }


    });