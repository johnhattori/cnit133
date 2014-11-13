angular.module('calcApp', [])
  .controller('CalcController', ['$scope', function($scope) {
 
    $scope.Clear = function() {
        $scope.inputNum = '';
    };
     
    $scope.squareNum = function() {
        return Math.sqrt(parseFloat($scope.inputNum));
    };

    $scope.tenthNum = function() {
        return Math.floor(parseFloat($scope.inputNum) * 10 + .5) / 10
    };

    $scope.hundredNum = function() {
        return Math.floor(parseFloat($scope.inputNum) * 100 + .5) / 100
    };

    $scope.thousandNum = function() {
        return Math.floor(parseFloat($scope.inputNum) * 1000 + .5) / 1000
    };
  }]);
