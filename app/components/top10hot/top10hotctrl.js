'use strict';

var hotgirls = [{
    id: 1,
    name: "Như Trần",
    img: "http://placehold.it/350x260"
}, {
    id: 2,
    name: "Lê Bích Thủy",
    img: "http://placehold.it/350x260"
}, {
    id: 3,
    name: "Nguyễn Thị Thùy Trang",
    img: "http://placehold.it/350x260"
}, {
    id: 4,
    name: "Mèo Nhox Kute",
    img: "http://placehold.it/350x260"
}, {
    id: 5,
    name: "Trần Thị Huệ",
    img: "http://placehold.it/350x260"
}, {
    id: 6,
    name: "Nguyễn Cao Bích Thùy",
    img: "http://placehold.it/350x260"
}, {
    id: 7,
    name: "Heo Kute",
    img: "http://placehold.it/350x260"
}, {
    id: 8,
    name: "Thanh Thảo",
    img: "http://placehold.it/350x260"
}, {
    id: 9,
    name: "Lê Thị Uyên",
    img: "http://placehold.it/350x260"
}, {
    id: 10,
    name: "Nguyễn Thị Hồng Nhung",
    img: "http://placehold.it/350x260"
}];

var hotboys = [{
    id: 11,
    name: "Nguyễn Long Uy",
    img: "http://placehold.it/350x260"
}, {
    id: 12,
    name: "Nguyễn Huy Khánh",
    img: "http://placehold.it/350x260"
}, {
    id: 13,
    name: "Chàng Trai Cô Đơn",
    img: "http://placehold.it/350x260"
}, {
    id: 14,
    name: "Con Nhà Giàu",
    img: "http://placehold.it/350x260"
}, {
    id: 15,
    name: "Lệ Rơi",
    img: "http://placehold.it/350x260"
}, {
    id: 16,
    name: "Kenny Sang",
    img: "http://placehold.it/350x260"
}, {
    id: 17,
    name: "Boy Dễ Thương",
    img: "http://placehold.it/350x260"
}, {
    id: 18,
    name: "Anh Chàng Trồng Si",
    img: "http://placehold.it/350x260"
}, {
    id: 19,
    name: "Tim Băng Giá",
    img: "http://placehold.it/350x260"
}, {
    id: 20,
    name: "Lee San",
    img: "http://placehold.it/350x260"
}];

angular.module('WithMeApp.controllers')
    .controller('Top10Hot', ['$scope', function($scope) {
        $scope.femalemembers = hotgirls;
        $scope.malemembers = hotboys;
    }]);
