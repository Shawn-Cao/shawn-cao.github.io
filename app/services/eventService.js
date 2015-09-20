'use strict';
angular.module('myApp.service.event', ['myApp.service.remote'])
    .factory('eventService', function(remoteService) {
        return {
            showAllEvents: function showAllEvents() {
                return remoteService.getAllEvents().then(function (data) {
                    if (!Array.isArray(data)) {
                        data = [data];
                    }
                    data.forEach(function (element) {
                        element.time = new Date(element.time);
                    });
                    return data.reduce(function (events, entry) {  //convert to Map with event.id as key
                        events[entry.id] = entry.val;
                        return events;
                    })
                }, function (error) {
                    debugger;
                    return error;
                });
            },
            registerNew: function registerNewEvent(newEvent) {
                return remoteService.registerNew(newEvent)
            },
            addAttendee: function addAttendee(newAttendee) {
                return remoteService.createNewAttendee(newAttendee)
            }
        };
    });
