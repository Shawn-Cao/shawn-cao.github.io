'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.service.remote'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'registration'
        });
    }])

    .controller('View1Ctrl', function($http, remoteService) {
        this.newEvent = {};
        var _this = this;
        remoteService.getAllEvents().then(function (data) {
            if (data && data.length >= 0) {
                _this.events = data;
            } else {
                _this.events = [data];
            }
        });
        this.registerEvent = function(data) {
            $http.post('http://localhost:8086/event', JSON.stringify(data))
                .then(function(response) {
                    debugger;
                    _this.events.add(response.data);
                }, function(data) {
                    debugger;
                    _this.events.add(response.data);
                })
        }
    });