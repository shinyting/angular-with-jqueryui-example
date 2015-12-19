var ajudemo = angular.module('ajudemo', ['ngRoute']);


ajudemo.controller('MainCtrl', function ($scope) {
	$scope.title = "this is limei";
})

ajudemo.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/a', {
		controller: 'ACtrl',
		templateUrl: 'views/about.html'
	}).
	otherwise({redirectTo:'/'});
}]);






// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
