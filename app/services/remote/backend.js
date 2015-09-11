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
            debugger;
            return $http.post(endpoints.localHost + operations.event)
                .then(function(response) {
                    debugger;
                    return response.data;
                }, null);
        }

        return {
            getAllEvents: getAllEvents
        }
    });