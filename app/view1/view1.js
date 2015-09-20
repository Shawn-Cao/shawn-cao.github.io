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

        this.registerEvent = function() {
            eventService.registerNew(this.newEvent)
                .then(function(createdEvent) {
                    debugger;
                    _this.events.push(createdEvent);
                }, function(error) {
                    debugger;
                })
        }
    });