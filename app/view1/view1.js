'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.service.event'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'registration'
        });
    }])

    .controller('View1Ctrl', function($http, $scope, eventService) {
        var _this = this;
        this.events = [];
        this.newEvent = {
            time: new Date()
        };
        this.newEventTimePicker = {
            dateOptions: {
                formatYear: 'yy',
                startingDay: 1
            },
            opened: false
        };
        eventService.showAllEvents().then( function (events) {
            _this.events = events;
        });
        this.accordion = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.filterEvents = {};
        //$scope.$watch(this.events);

        this.registerEvent = function(data) {
            debugger;
            $http.post('http://localhost:8086/event', JSON.stringify(data))
                .then(function(response) {
                    debugger;
                    _this.events.push(response.data);
                }, function(data) {
                    debugger;
                    _this.events.push(response.data);
                })
        }
    });