angular.module('myawesomeApp.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
