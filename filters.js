/**
 * Created by zolnos on 2015-11-16.
 */

angular.module('filters', [])
.filter('addDash', function() {
        return function(input, var1, var2) {

            var afterDash = '';
            //if(var1) {
            //    afterDash = var1;
            //}

            return input + '_';// + afterDash;

        }
    })

.filter('car', function() {


        return function(input, car) {

            return ""+input == ""+car ? input : false;

        }

    });
