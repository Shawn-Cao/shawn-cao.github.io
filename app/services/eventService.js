'use strict';
angular.module('myApp.service.event', ['myApp.service.remote'])
    .factory('eventService', function(remoteService) {
        return {
            showAllEvents: function showAllEvents() {
                return remoteService.getAllEvents().then(function (data) {
                    var events = Array.isArray(data) ? data : [data];
                    events.forEach(function (element) {
                        element.time = new Date(element.time);
                    });
                    return events;
                }, function (error) {
                    debugger;
                    return error;
                });
            },
            registerNewEvent: function registerNewEvent(newEvent) {
                return remoteService.registerNewEvent(newEvent)
            },
            addAttendee: function addAttendee(newAttendee) {
                return remoteService.createNewAttendee(newAttendee)
            }
        };
    });
