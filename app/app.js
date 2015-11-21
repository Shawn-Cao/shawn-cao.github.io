'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'angualr-fun',
    'myApp.view2',
    'myApp.version',
    'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
    //$routeProvider.otherwise({redirectTo: '/view1'});
}]);
