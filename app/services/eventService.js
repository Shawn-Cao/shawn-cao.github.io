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
                    return data
                }, function (error) {
                    debugger;
                    return error;
                });
            },
            registerNew: function registerNew(newEvent) {
                return remoteService.registerNew(newEvent)
            }

        }
    });
