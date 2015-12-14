'use strict';

angular.module('WithMeApp.controllers')
    .controller('ChatBoxCtrl', ['$scope', function($scope) {
        $scope.ListMessage = [];
        $scope.chatboxlist = [{id: 0, ListMessage:[]},
    {id: 1, ListMessage:[]}];

        $scope.SendMessage = function(id) {
            if ($scope.chatboxlist[id].textmessage.length == 0) return;
            var message = {
                user: {
                    name: 'toi'
                },
                content: $scope.chatboxlist[id].textmessage,
                isMy: true
            };
            $scope.chatboxlist[id].ListMessage.push(message);
            $scope.chatboxlist[id].textmessage = "";
            $scope.chatboxlist[id].ListMessage.push(MachineMessage());
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
