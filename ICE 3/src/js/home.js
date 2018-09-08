var app = angular.module('nutriApplication', []);
app.controller('calorieController', function($scope,$http) {
    $scope.getDetails = function(){
        var phrase=$scope.phrase;
        $http.get('https://api.nutritionix.com/v1_1/search/phrase='+phrase+'?results=0:5&fields=*&appId=490540eb&appKey=98ffc5fab2e74ba594fa8756e8f059be').success(function(data) {
            if (data.hits == null) {
                return false;
            }
            $scope.displayDetails = data;
            console.log(data)
         });
    }

});
app.controller('speechController',function ($scope,$http) {
    $scope.speech = function(){
        var phrase=$scope.phrase;
        var refUrl = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=7f8d1c55-c516-4760-9d93-500d1d8884c4&password=UOYrd3jxSkVY&text="+phrase;
        $("#text2speech").attr('href',refUrl);
    }
});