'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
      $scope.data = {
        newEvent: {}
      };
      $http.get('http://localhost:8086/event')//TODO: move this to services
          .success(function(data) {
            debugger;
            $scope.data.events = data;
          });
      $scope.registerEvent = function(data) {
        $http.post('http://localhost:8086/event', JSON.stringify(data))
            .success(function(data) {
              debugger;
              $scope.data.events.add(data);
            })
      }
}]);