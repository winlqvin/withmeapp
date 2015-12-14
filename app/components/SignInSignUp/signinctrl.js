'use strict';

angular.module('WithMeApp.controllers')
    .controller('SignInCtrl', ['$scope','$http',"DOMAIN", function($scope,$http, domain) {


        $scope.SignIn = function(){
                console.log($scope.user);
                console.log(domain);
                var account = {};
                account
            $http.post( domain + '/users/login',$scope.user)
                .success(function (data, status) {
                   console.log(data);
                })
                .error(function (err) {
                    console.log(err);
                });

        }

        $scope.SignUp = function(){
			console.log($scope.newuser);
        }

        $scope.LoginWithFb = function(){
        	console.log("log in with fb");



        	$http({
            method:'GET',
            url: 'http://localhost:8080/users/auth/facebook',
            withCredentials: true

            })
            .success(function (data, status) {
            	console.log(data);
                //$scope.student = data;
            })
            .error(function (err) {
            	console.log(err);
            });

        }
    }]);
