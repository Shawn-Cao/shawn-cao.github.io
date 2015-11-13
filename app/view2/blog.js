'use strict';
angular.module('myApp.view2', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: 'view2/blog.html',
            controller: 'BlogCtrl',
            resolve: {}
        });
    })

    .controller('BlogCtrl', function ($scope, $http) {
        var blog = {  //TODO: build an angular APP to list all blogs with routing to individual ones.
            'dir': 'https://api.github.com/repos/Shawn-Cao/shawn-cao.github.io/contents/blogs',
            'base': 'blogs/'
        };
        if (!$scope.posts) {
            $http.get(blog.dir).then(function (response) {
                debugger;
                $scope.posts = response.data.map(function (it) {
                    return it.path;
                }, function(err) { $scope.posts = ['failed to get posts']; })
            })
        }
    });
