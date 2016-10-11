'use strict';

angular.module('myApp.service.remote', [])

    .constant('endpoints', {
        backend: 'http://shawn-cao-node.herokuapp.com',  //backend from Gary
        localHost: 'http://localhost:8086'  //SOAP UI mock
    })
    .constant('operations', {
        event: '/events',
        attendee: '/users'
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
            debugger;
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

        var publicApi = {
            getAllEvents: getAllEvents,
            registerNewEvent: registerNewEvent,
            createNewAttendee: createNewAttendee
        };

        return publicApi;
    });