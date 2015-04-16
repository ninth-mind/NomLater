'use strict';

angular.module('lunchCorgi.signup', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/signup', {
//     templateUrl: 'signup/signup.html',
//     controller: 'SignUpCtrl'
//   });
// }])

.controller('SignUpCtrl', [function($scope, Users) {
  $scope.user = {};

  $scope.signup = function() {
    Users.signup($scope.user)
      .then(function(token){
        $window.localStorage.setItem('com.corgi', token);
        $location.path('/');
      })
      .catch(function(error){
        console.log(error);
      });
  };

}]);