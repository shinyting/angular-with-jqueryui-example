var ajudemo = angular.module('ajudemo', ['ngRoute'], function ($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

ajudemo.controller('MainCtrl', function ($scope, $rootScope, $location) {
	$scope.logo = "angular && jqueryUi demo";
	$scope.menus = [
		{
			mTitle: "开始",
			mHref: '#/',
			subMenu: [
				{
					subTitle: "准备的库",
					subHref: '#/',
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
					subHref: "#/resize"
				},
				{
					subTitle: "选择",
					subHref: "#/select"
				},
				{
					subTitle: "排序",
					subHref: "#/sort"
				}
			]
		},
		{
			mTitle: "页面组件",
			mHref: "#/accordion",
			subMenu: [
				{
					subTitle: "手风琴效果",
					subHref: "#/accordion"
				},
				{
					subTitle: "自动完成",
					subHref: "#/autoComplete"
				},
				{
					subTitle: "日期选择",
					subHref: "#/datepicker"
				},
				{
					subTitle: "对话框",
					subHref: "#/dialog"
				},
				{
					subTitle: "滑块",
					subHref: ""
				},
				{
					subTitle: "选项卡",
					subHref: ""
				},
				{
					subTitle: "提示",
					subHref: ""
				}
			]
		}
	];

	//url改变时需要配置对应的菜单栏的选中状态
	$rootScope.$on('$routeChangeSuccess', function () {
		//左侧菜单默认选中状态的设置
		$scope.curUrl = $location.path();
		if (!$scope.curUrl) {
			$scope.curUrl = "/";
		}
		for (var i = 0; i < $scope.menus.length; i ++) {
			var inMenu = [];
			var menu = $scope.menus[i];
			for (var j = 0; j < menu.subMenu.length; j ++) {
				var sMenu = menu.subMenu[j];
				var sMenuUrl = sMenu.subHref.split('#')[1];
				if (sMenuUrl == $scope.curUrl) {
					sMenu.choosen = true;
					inMenu.push(true);
				}
				else {
					sMenu.choosen = false;
					inMenu.push(false);
				}
				console.log(sMenu.choosen);
			}
			var flag;
			for (var k = 0; k < inMenu.length; k ++) {
				if (inMenu[k] == true) {
					flag = true;
					break;
				}
				else {
					flag = false;
				}
			}
			if (flag == true) {
				menu.choosen = true;
			}
			else {
				menu.choosen = false;
			}
		}
	});

	//配置鼠标点击时一级菜单和二级菜单的选中状态
	//没有发现监测路由变化方法时为菜单点击写的方法
	//有了$rootScope.$on('$routeChangeSuccess', function () {}配置菜单就方便很多
	// $scope.setLocation = function (event, index, parentIndex) {
	// 	//鼠标点击一级菜单
	// 	if (!parentIndex) {
	// 		for (var i = 0; i < $scope.menus.length; i ++) {
	// 			if (index == i) {
	// 				$scope.menus[i].choosen = true;
	// 				$scope.menus[i].subMenu[0].choosen = true;
	// 				for (var j = 1; j < $scope.menus[i].subMenu.length; j ++) {
	// 					$scope.menus[i].subMenu[j].choosen = false;
	// 				}
	// 			}
	// 			else {
	// 				$scope.menus[i].choosen = false;
	// 				for (var j = 0; j < $scope.menus[i].subMenu.length; j ++) {
	// 					$scope.menus[i].subMenu[j].choosen = false;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	//鼠标点击二级菜单
	// 	else {
	// 		for (var i = 0; i < $scope.menus.length; i ++) {
	// 			if (parentIndex == i) {
	// 				$scope.menus[i].choosen = true;
	// 				for (var j = 0; j < $scope.menus[i].subMenu.length; j ++) {
	// 					if (index == j) {
	// 						$scope.menus[i].subMenu[j].choosen = true;
	// 					}
	// 					else {
	// 						$scope.menus[i].subMenu[j].choosen = false;
	// 					}
	// 				}
	// 			}
	// 			else {
	// 				$scope.menus[i].choosen = false;
	// 				for (var j = 0; j < $scope.menus[i].subMenu.length; j ++) {
	// 					$scope.menus[i].subMenu[j].choosen = false;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	//阻止事件冒泡，但不能阻止a链接的默认行为
	// 	event.stopPropagation();
	// }
})

//配置路由
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
	when('/resize', {
		controller: 'ResizeCtrl',
		templateUrl: 'views/resize.html'
	}).
	when('/select', {
		controller: 'SelectCtrl',
		templateUrl: 'views/select.html'
	}).
	when('/sort', {
		controller: 'SortCtrl',
		templateUrl: 'views/sort.html'
	}).
	when('/accordion', {
		controller: 'AccordionCtrl',
		templateUrl: 'views/accordion.html'
	}).
	when('/autoComplete', {
		controller: 'AutoCompleteCtrl',
		templateUrl: 'views/autoComplete.html'
	}).
	when('/datepicker', {
		controller: 'DatepickerCtrl',
		templateUrl: 'views/datepicker.html'
	}).
	when('/dialog', {
		controller: 'DialogCtrl',
		templateUrl: 'views/dialog.html'
	}).
	otherwise({redirectTo:'/'});
}]);

