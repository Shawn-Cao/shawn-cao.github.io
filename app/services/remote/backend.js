'use strict';

angular.module('myApp.service.remote', [])

    .constant('endpoints', {
        backend: 'http://web-seminar.herokuapp.com',  //backend from Gary
        localHost: 'http://localhost:8086'  //SOAP UI mock
    })
    .constant('operations', {
        event: '/event',
        attendee: '/attendee'
    })

    .factory('remoteService', function($http, endpoints, operations) {
        var endpoint_event = endpoints.backend + operations.event;  //private member to hold URLs
        var endpoint_attendee = endpoints.backend + operations.attendee;

        function getAllEvents() {
            return $http.get(endpoint_event)
                .then(function(response) {
                    return response.data;
                }, function(error) {
                    debugger;
                });
        }
        function registerNewEvent(newEvent) {
            return $http.post(endpoint_event, JSON.stringify(newEvent))
                .then(function(response) {
                    return response.data;
                }, function(error) {
                    debugger;
                });
        }
        function createNewAttendee(newAttendee) {
            return $http.post(endpoint_attendee, JSON.stringify(newAttendee))
                .then(function(response) {
                    return response.data;
                }, function(error) {
                    debugger;
                })
        }

        return {
            getAllEvents: getAllEvents,
            registerNewEvent: registerNewEvent,
            createNewAttendee: createNewAttendee
        }
    });