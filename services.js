/**
 * Created by zolnos on 2015-11-15.
 */

angular.module('services',[])

    .service('Lorem', function($q, $http) {


        return {

            fetch: function() {
                return $http.get('lorem.json');
            }
        }


    })

    .factory('SomethingHasChanged', ['$rootScope', function($rootScope) {

        var timex = null;

        function change() {
            $rootScope.$broadcast('somethingHasChanged', Math.random());
            timex = setTimeout(change, 2000);
            console.info('change');
        }

        return {
            start: function() {
                change();
            },
            stop: function() {
                clearTimeout(timex);
            }
        }





    }])

    .service('getme', function($q) {

        return {
            get: function() {
                var d = $q.defer();

                setTimeout(function() {
                    d.resolve('Hej!');
                }, 5000);

                return d.promise;
            }
        }

    });


