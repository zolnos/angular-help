/**
 * Created by zolnos on 2015-11-16.
 */

angular.module('tryApp.directives', [])

.directive('myImage', function() {

        return {
            //template: '<div>My Image Direcitve {{ afterTitle }}</div>',
            restrict: 'A',
            templateUrl: 'directive.html',
            scope: {
                'afterTitle': '@',
                'person': '=personus',
                'change': '&'
            },
            controller: function($scope) {
                $scope.within = 'i am inside';


            },
            link: function($scope, dom2) {

                dom2.bind('click', function () {
                    console.info($scope.change);
                    $scope.person = 'Piotrek wiencel'
                    $scope.change();
                });
            }
        }

    });
