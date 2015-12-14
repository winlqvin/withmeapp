'use strict';

angular.module('WithMeApp.controllers')
    .controller('OnlineSidebarCtrl', ['$scope', function($scope) {
        $scope.friends = [
            {
                id: 1,
                name: "Lê Quốc Vin",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11038397_736987373086144_5716757600963399626_n.jpg?oh=d75310a479321016a4cf70cd8b5746b2&oe=56DEEDFB"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            },
            {
                id: 2,
                name: "Nguyễn Long Uy",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/11536122_639854502816567_107041893847545073_n.jpg?oh=97bda18acf7c619ab766823da58d63ff&oe=571B4EE7&__gda__=1460812615_8644367e450b22e9f3bc59d2cde94430"
            },
            {
                id: 3,
                name: "Nguyễn Huy Khánh",
                status: "online",
                imgurl: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfp1/v/t1.0-1/c0.1.200.200/1959924_10152224984620395_277562189_n.jpg?oh=a2d495631c43920be23fedf48cf1e1ee&oe=571AEE13&__gda__=1461283528_0e67cdc6599b872a94bec872520bf4ff"
            },
            {
                id: 4,
                name: "Nguyễn Hoàng Việt",
                status: "online",
                imgurl: "https://scontent-sin1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/601751_485221908211098_43079101_n.jpg?oh=979193e0a1e93138f9adfb60d035a219&oe=56DE1CC6"
            }
        ];

        $scope.OpenChatbox = function(friendid){
            
            console.log('Start chat with ' + friendid);
        }

    }]);
