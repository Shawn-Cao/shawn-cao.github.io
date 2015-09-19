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

        function getAllEvents() {  //public functions
            return $http.get(endpoints.backend + operations.event)
                .then(function(response) {
                    debugger;
                    return response.data;
                }, function(error) {
                    debugger;
                    return error;
                });
        }

        return {
            getAllEvents: getAllEvents
        }
    });