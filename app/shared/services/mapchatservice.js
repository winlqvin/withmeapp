/**
 * Created with JetBrains WebStorm.
 * User: LeeSan
 * Date: 12/14/15
 * Time: 2:59 PM
 * To change this template use File | Settings | File Templates.
 */
angular.module('MapChatService', [])
    .factory('MapChatService', function($rootScope){
    var socket = io.connect();
    console.log("socket created");

    return {
        on: function (eventName, callback) {
            function wrapper() {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            }

            socket.on(eventName, wrapper);

            return function () {
                socket.removeListener(eventName, wrapper);
            };
        },

        emit: function (eventName, data) {
            console.log('socket.emit'+ eventName + data);
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if(callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
});
