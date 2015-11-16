/**
 * Created by zolnos on 2015-11-16.
 */

angular.module('tryApp.directives', [])

.directive('myImage', function() {

        return {

            restrict: 'EA',

            templateUrl: 'directive.html?t',

            scope: {
                'afterTitle': '@',
                'person': '=personus',
                change: '&'
            },
            controller: function($scope) {

                $scope.within = 'i am inside';

                $scope.changeHello = function() {
                    console.info('Ad customer');
                    var name = 'Piotruś';
                    $scope.change({name:name});
                }

            },
            link: function($scope, dom2) {




                //dom2.bind('click', function () {
                //    console.info($scope.change);
                //    $scope.person = 'Piotrek wiencel';
                //    var name = 'as';
                //    $scope.change(name);
                //});
            }
        }

    });
