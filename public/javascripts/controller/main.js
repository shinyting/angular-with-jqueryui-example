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
			choosen: true,
			subMenu: [
				{
					subTitle: "准备的库",
					subHref: '#/',
					choosen: true
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

	//配置一级菜单和二级菜单的选中状态
	$scope.setLocation = function (event, index, parentIndex) {
		//鼠标点击一级菜单
		if (!parentIndex) {
			for (var i = 0; i < $scope.menus.length; i ++) {
				if (index == i) {
					$scope.menus[i].choosen = true;
					$scope.menus[i].subMenu[0].choosen = true;
					for (var j = 1; j < $scope.menus[i].subMenu.length; j ++) {
						$scope.menus[i].subMenu[j].choosen = false;
					}
				}
				else {
					$scope.menus[i].choosen = false;
					for (var j = 0; j < $scope.menus[i].subMenu.length; j ++) {
						$scope.menus[i].subMenu[j].choosen = false;
					}
				}
			}
		}
		//鼠标点击二级菜单
		else {
			for (var i = 0; i < $scope.menus.length; i ++) {
				if (parentIndex == i) {
					$scope.menus[i].choosen = true;
					for (var j = 0; j < $scope.menus[i].subMenu.length; j ++) {
						if (index == j) {
							$scope.menus[i].subMenu[j].choosen = true;
						}
						else {
							$scope.menus[i].subMenu[j].choosen = false;
						}
					}
				}
				else {
					$scope.menus[i].choosen = false;
					for (var j = 0; j < $scope.menus[i].subMenu.length; j ++) {
						$scope.menus[i].subMenu[j].choosen = false;
					}
				}
			}
		}
		//阻止事件冒泡，但不能阻止a链接的默认行为
		event.stopPropagation();
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

