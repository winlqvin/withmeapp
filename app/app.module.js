'use strict';

//      Định nghĩa các dependencies và các thành phần của app, khai báo đối tượng app để sử dụng
//      trong toàn bộ chương trình
//      Chú khi file này phải được khai báo ở trên các file khác trong index.html

 angular.module('WithMeApp.controllers', []);
 angular.module('WithMeApp.services', []);
 angular.module('WithMeApp.filters', []);
 angular.module('WithMeApp.directives', []);

var app = angular.module('WithMeApp', [
	'ui.router',
    'WithMeApp.controllers',
    'WithMeApp.services',
    'WithMeApp.filters',
    'WithMeApp.directives'
]);