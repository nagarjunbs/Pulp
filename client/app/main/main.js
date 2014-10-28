'use strict';

angular.module('pulpApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });
    }).controller('MainCarousel', function ($scope) {

    });
