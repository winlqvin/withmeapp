'use strict';

//          Tạo các UI Route, định nghĩa các state và register Interceptors

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home'); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home

    // Đăng ký Token Interceptor ở đây
    //$httpProvider.interceptors.push('TokenInterceptor');

    $stateProvider
        .state('home', {    // Định nghĩa 1 state home
            url: '/home',  // khai báo Url hiển thị
            templateUrl: 'components/home/homeview.html',  // đường dẫn view
            controller: 'HomeCtrl', // Khai báo controller
            title: 'Trang chủ',     // Tiêu đề trang
            access:{                // yêu cầu Login hay không, dùng trong authorize
                requiredLogin: false
            }
        })
        .state('logged', {    // Định nghĩa 1 state home
            url: '/logged',  // khai báo Url hiển thị
            templateUrl: 'components/home/logged/loggedview.html',  // đường dẫn view
            controller: 'LoggedCtrl', // Khai báo controller
            title: 'Trang chủ',     // Tiêu đề trang
            access:{                // yêu cầu Login hay không, dùng trong authorize
                requiredLogin: false
            }
        })
        ;
});
