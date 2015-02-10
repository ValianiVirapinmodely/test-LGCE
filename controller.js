/* global angular */
angular.module('app')
    .controller('indexCtrl', [
        '$scope',
        'UserFactory',
        function ($scope, UserFactory) {
            'use strict ';
            $scope.users = UserFactory.getUsers();

        }

    ])
    .controller('viewCtrl', [
        '$scope',
        '$stateParams',
        'UserFactory',
        function ($scope, $stateParams, UserFactory) {
            'use strict ';
           $scope.user = UserFactory.getUser(parseInt($stateParams.id));
    }]);