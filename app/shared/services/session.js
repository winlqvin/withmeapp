'use strict';

angular.module('WithMeApp.services')
.factory('sessionService',['$rootScope', '$window', '$http',
function($rootScope, $window, $http){
    var session = {
        init: function(){
            this.resetSession();
        },

        resetSession: function(){
            this.currentUser = null;
            this.isLoggedIn = false;
        },

        facebookLogin: function(){
            var url = '/auth/facebook',
                width = 800,
                height = 650,
                top = (window.outerHeight - height) / 2,
                left = (window.outerWidth - width) / 2;
                 $window.open(url, 'facebook_login',
                 'width=' + width + ',height=' + height
                 + ',scrollbars=0,top=' + top + ',left=' + left);
        },

        logout: function(){
            var scope = this;
            this.resetSession();
            $rootScope.$emit('session-changed');
        },

        authSuccess: function(userData){
            this.currentUser = userData;
            this.isLoggedIn = true;
            $rootScope.$emit('session-changed');
        },

        authFailed: function(){
            this.resetSession();
            alert('Authentication failed');
        }
    }

    session.init();
    return session;
}]);
