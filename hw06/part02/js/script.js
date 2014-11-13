angular.module('App', [])
  .controller('SearchController', ['$scope', function($scope) {

    $scope.countChar = function() {
        var count = 0;
        var input = ($scope.text + '');
        for (var i = 0; i < input.length; i++)
            if (input.charAt(i) === ($scope.charInput+ '')) {
                count++;
            }
         return count;

    };

  }]);
