var ajudemo = angular.module('ajudemo', ['ngRoute'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

ajudemo.controller('MainCtrl', function ($scope, $location) {
	$scope.logo = "angular && jqueryUi demo";
	$scope.menus = [
		{
			mTitle: "开始",
			mHref: '#/',
			subMenu: [
				{
					subTitle: "准备的库",
					subHref: '#/'
				}
			]
		},
		{
			mTitle: "页面交互",
			mHref: "#/drag",
			subMenu: [
				{
					subTitle: "元素可拖拽",
					subHref: "#/drag"
				},
				{
					subTitle: "尺寸可调整",
					subHref: ""
				},
				{
					subTitle: "选择",
					subHref: ""
				},
				{
					subTitle: "排序",
					subHref: ""
				}
			]
		},
		{
			mTitle: "页面组件",
			mHref: "/accordion",
			subMenu: [
				{
					subTitle: "手风琴效果",
					subHref: "/accordion"
				},
				{
					subTitle: "自动完成",
					subHref: ""
				},
				{
					subTitle: "按钮",
					subHref: ""
				},
				{
					subTitle: "日期选择",
					subHref: ""
				},
				{
					subTitle: "对话框",
					subHref: ""
				}
			]
		}
	];

	$scope.setLocation = function (index) {
		var currentUrl = $location.path();
		if (currentUrl == "/") {
			$
		}
	}
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

