var ajudemoModule = angular.module('ajudemo', ['ngRoute']);

ajudemoModule.controller('ACtrl', function ($scope) {

});

ajudemoModule.controller('MainCtrl', function ($scope) {
	$scope.title = "this is limei";
})

ajudemoModule.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	// when('/', {
	// 	controller: MainCtrl,
	// 	templateUrl: '../../views/index.html'
	// }).
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
