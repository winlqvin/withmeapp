'use strict';

/* Directives */


angular.module('WithMeApp.directives')
  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        var code = event.keyCode || event.which;
        if (code === 13) {
          if (!event.shiftKey) {
            scope.$apply(function () {
              scope.$eval(attrs.ngEnter);
            });
            event.preventDefault();
          }
        }
      });
    };
  })
  .directive('scrollBottom', function () {
    return {
      scope: {
        scrollBottom: "="
      },
      link: function (scope, element) {
        scope.$watchCollection('scrollBottom', function (newValue) {
          if (newValue) {
            $(element).scrollTop($(element)[0].scrollHeight);
          }
        });
      }
    }
  });
