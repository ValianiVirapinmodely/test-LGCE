/* global angular */
angular.module('app')
    .controller('indexCtrl', [
        '$scope',
        'UserFactory',
        function ($scope, UserFactory) {
            'use strict ';
            $scope.users = UserFactory.getUsers();
            /*
            for (var i=0; i<$scope.users.length; i++){
                var firstname = $scope.users[i].firstname;
                var lastname = $scope.users[i].lastname;
                //récupérer les informations et les afficher pour chaque utilisateur
            }*/
        }
    ])
    .controller('viewCtrl', [
        '$scope',
        '$stateParams',
        'UserFactory',
        function ($scope, $stateParams, UserFactory) {
            'use strict ';
            $scope.user = UserFactory.getUser($stateParams.id);
    }]);