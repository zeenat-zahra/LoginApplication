angular.
  module('mainApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<login-form></login-form>'
        }).
        when('/adduser', {
          template: '<add-user></add-user>'
        }).
        otherwise('/');
    }
  ]);