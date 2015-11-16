/**
 * Created by zolnos on 2015-11-15.
 */
angular.module('route',['ngRoute', 'services'])

    .config(function($routeProvider) {


        $routeProvider.when('/', {
           controller:'HelloController as hc',
           templateUrl: 'hello.html',
           resolve: {
               lorem: function(Lorem) {
                   return Lorem.fetch();
               }
           }
        });


        $routeProvider.when('/todo', {
            controller:'FirstController as fcontroller',
            templateUrl: 'todo.html'
        });

});