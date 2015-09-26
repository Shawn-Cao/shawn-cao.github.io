angular.module('promiseApp', []).controller('PromiseCtrl', function(promiseFactory) {
    this.model = 'model';
    this.promiseModel = this.model;
    _this = this;
    this.displayWithPromise = function(data) {
        //Wrong way:
        /* this.promiseModel = promiseFactory.getPromise(data); */
        //correct way:
        promiseFactory.getPromise(data).then(function() {
            _this.promiseModel = data;
        });
        this.promiseModel = "waiting promise to resolve";
    }
}).factory('promiseFactory', function($q, $timeout) {
    var getPromise = function (text) {  //private
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(text);
        }, 1000);
        return deferred.promise;
    };
    return {
        getPromise: getPromise
    };
});