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
        this.userName = '';
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
            debugger;
            _this.events = events;
        });
        this.accordion = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.filterEvents = {};
        //$scope.$watch(this.events);

        this.registerEvent = function() {
            eventService.registerNewEvent(this.newEvent)
                .then(function(createdEvent) {
                    debugger;
                    _this.events.push(createdEvent);
                })
        };
        this.joinEvent = function(eventId) {
            if (this.userName == '') {
                this.userName = prompt("Please enter your name", "John Doe");
            }
            var newAttendee = {
                name: this.userName,
                event: eventId
            };
            eventService.addAttendee(newAttendee)
                .then(function(addedAttendee) {
                    debugger;
                    if (!addedAttendee.event) {
                        return null;
                    }
                    _this.events.find(function(event) {
                        return event.id == addedAttendee.event;
                    }).attendees.unshift(addedAttendee)
                })
        };
        this.showUp = function(attendeeId, eventId) {
            debugger;
        }
    });