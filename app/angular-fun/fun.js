'use strict';

angular.module('angualr-fun', ['ngRoute', 'myApp.service.event'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'angular-fun/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'registration'
        });
    }])

    .controller('View1Ctrl', function($http, $scope, eventService) {
        var _this = this;
        //init data objects - local
        this.events = [];
        this.userName = '';
        this.newEvent = {
            time: new Date()
        };
        this.accordion = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.filterEvents = {};
        //init data objects - remote
        eventService.showAllEvents().then( function (events) {
            debugger;
            _this.events = events;
        });
        //init APIs
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
                    }).attendees.push(addedAttendee)
                })
        };
        this.showUp = function(attendeeId, eventId) {
            debugger;
        }
    });
