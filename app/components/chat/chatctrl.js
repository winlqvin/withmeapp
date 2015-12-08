'use strict';

angular.module('WithMeApp.controllers')
    .controller('ChatRoomCtrl', ['$scope', function($scope) {
        $scope.ListMessage = [];

        $scope.SendMessage = function() {
            if ($scope.textmessage.length == 0) return;
            var message = {
                user: {
                    name: 'toi'
                },
                content: $scope.textmessage,
                isMy: true
            };
            $scope.ListMessage.push(message);
            $scope.textmessage = "";
            $scope.ListMessage.push(MachineMessage());
        };

    }]);

var MachineMessage = function() {
    var message = {
        user: {
            name: 'Machine'
        },
        content: "",
        isMy: false
    };
    var messages = [
        'Chào anh!',
        'Rất vui được làm quen với anh!',
        'Em thích anh <3',
        'Hẹn hò với em nhé!',
        'Anh đẹp trai quá!',
        'Anh thấy em thế nào?',
        'Anh có thích em không?'
    ];
    message.content = messages[getRandomPos(messages.length)];
    return message;
};

var getRandomPos = function(max) {
    return Math.floor((Math.random() * max));
};
