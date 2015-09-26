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
        }, function() {
            _this.promistModel = data;
        });
        this.promiseModel = "waiting promise to resolve";  //optional waiting message
    };
}).factory('promiseFactory', function($q, $timeout) {
    var getPromise = function (text) {  //private
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(text);  //.reject('intentional failure');
        }, 1500);
        return deferred.promise;
    };
    return {
        getPromise: getPromise
    };
});