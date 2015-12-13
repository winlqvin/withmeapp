'use strict';

angular.module('WithMeApp.controllers')
    .controller('SignInCtrl', ['$scope', function($scope) {


        $scope.SignIn = function(){
                console.log($scope.user);
        }

        $scope.SignUp = function(){
console.log($scope.newuser);
        }
    }]);
