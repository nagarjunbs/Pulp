'use strict';

angular.module('pulpApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('visualize', {
                url: '/visualize',
                templateUrl: 'app/visualize/visualize.html',
                controller: 'VisualizeCtrl'
            });
    });
