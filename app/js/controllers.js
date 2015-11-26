'use strict';

/* Controllers */

angular.module('WithMeApp.controllers', []).
  controller('HomeCtrl', ['$scope', function($scope) {

    
  }])
  .controller('LoginCtrl', ['$scope', function($scope) {
  
  }])
  .controller('ChatRoomCtrl', ['$scope', function($scope){
    $scope.ListMessage = [];
    $scope.SendMessage = function(){
      if ($scope.textmessage.length == 0) return;
      //$scope.textmessage = $scope.textmessage.replace(/\r\n|\r|\n|\n/g,'<br>');

      var message = { user: {name: 'toi'}, content: $scope.textmessage, isMy: true};
      $scope.ListMessage.push(message);
      $scope.textmessage = "";
      $scope.ListMessage.push(MachineMessage());
    };
  }]);
  
    var MachineMessage = function(){
     var message = { user: {name: 'Machine'}, content: "", isMy: false};
     var messages = [
       'What the fuck!',
       'I am kidding!',
       'Oh! I am just a machine.',
       'Good night!',
       'Do you love me?',
       'I love you so much!',
       'Thank for chatting with me!'
     ];
     message.content = messages[getRandomPos(messages.length)];
     return message;
  };
  
var getRandomPos = function(max){
  return Math.floor((Math.random() * max));
};