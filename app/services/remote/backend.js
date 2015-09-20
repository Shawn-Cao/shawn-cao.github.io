'use strict';

angular.module('myApp.service.remote', [])

    .constant('endpoints', {
        backend: 'http://web-seminar.herokuapp.com',
        localHost: 'http://localhost:8086'
    })
    .constant('operations', {
        event: '/event',
        attendee: '/attendee'
    })

    .factory('remoteService', function($http, endpoints, operations) {
        var endpoint_event = endpoints.backend + operations.event;  //private member to hold URL

        function getAllEvents() {
            return $http.get(endpoint_event)
                .then(function(response) {
                    debugger;
                    return response.data;
                }, function(error) {
                    debugger;
                    return error;
                });
        }
        function registerNew(newEvent) {
            return $http.post(endpoint_event, JSON.stringify(newEvent))
        }

        return {
            getAllEvents: getAllEvents,
            registerNew: registerNew
        }
    });