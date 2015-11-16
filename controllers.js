/**
 * Created by zolnos on 2015-11-15.
 */


angular.module('controllers', [])


    .controller('HelloController', ['lorem', '$scope', 'SomethingHasChanged', '$rootScope', 'getme',

        function(lorem, $scope, shc, $rootScope, getme) {

        $scope.text = 'Witaj u mnie!';
        this.lorem = lorem.data.cars;

        $scope.ff = function(input) {
            return input;
        }

        shc.start();

        $rootScope.$on('somethingHasChanged', function(nt, data) {
            //console.info(data);
            changeIt(data);
        });

            function changeIt(data) {

                $scope.$apply(function() {
                    $scope.randomex = data;

                })
            }

    $scope.afterTitle = 'testuś';

            //console.info(lorem);

            getme.get().then(function(data) {
               console.info('Jestem zgetowany: ', data);
            });


            $scope.changeHello = function() {
                $scope.$apply(function() {
                    $scope.text = 'Zmieniłem, jesteś łosiem!';
                });

                console.info('hh');
            }


    }])

    .controller('FirstController', ['$scope', 'SomethingHasChanged', function($scope, shc) {

        $scope.init = function() {
            shc.stop();
        }

        var list = this;

        list.textToAdd = '';

        list.sayHello = function() {
            return 'hello';
        }

        list.todoList = [
            {name:'Zapałka', done:false},
            {name:'Kij', done:false}
        ];

        list.add = function() {

            list.todoList.push({name:list.textToAdd, done:false});
            list.textToAdd = '';

        }

        list.archive = function() {

            var s = list.todoList;

            list.todoList = [];


            angular.forEach(s, function(item){
                if(!item.done) list.todoList.push(item);
            });

        }


        list.count = function() {
            var value = 0;
            angular.forEach(list.todoList, function(item) {
                value += item.done ? 1 : 0;
            });
            return value;
        }


    }]);