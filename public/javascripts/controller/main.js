var ajudemo = angular.module('ajudemo', ['ngRoute'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

ajudemo.controller('MainCtrl', function ($scope) {
	$scope.logo = "angular && jqueryUi demo";
	$scope.menus = [
		{
			mTitle: "开始",
			mHref: '/',
			subTitle: ["准备的库"]
		},
		{
			mTitle: "页面交互",
			mHref: "/drag",
			subTitle: ["元素可拖拽", "尺寸可调整", "选择", "排序"]
		},
		{
			mTitle: "页面组件",
			mHref: "/accordion",
			subTitle: ["手风琴效果", "自动完成", "按钮", "日期选择", "对话框"]
		}
	];
})

ajudemo.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/', {
		controller: 'StartCtrl',
		templateUrl: 'views/start.html'
	}).
	when('/drag', {
		controller: 'DragCtrl',
		templateUrl: 'views/drag.html'
	}).
	otherwise({redirectTo:'/'});
}]);

