/* global angular */
angular.module('app')
    .controller('indexCtrl', [
        '$scope',
        'UserFactory',
        function ($scope, UserFactory) {
            'use strict ';
            // Code js du controller indexCtrl
        }
    ])
    .controller('viewCtrl', [
        '$scope',
        '$stateParams',
        'UserFactory',
        function ($scope, $stateParams, UserFactory) {
            'use strict ';
            // Code js du controller viewCtrl
    }]);