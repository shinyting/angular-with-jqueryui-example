//页面交互部分

//元素可拖拽
ajudemo.directive("dragElement", function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attr, ngModel) {
			if (angular.isDefined(attr.dragElementMore)) {
				element.draggable({
					addClasses: false,
					cursor: "pointer", //拖动时鼠标的形状
					cursorAt: { //拖动时鼠标在被拖动元素的位置
						left: 5,
						top: 10
					},
					delay: 30, //延时3秒开始拖动
					// disabled: true //不可拖动
					grid: [40,10],
					start: function (event, ui) {
						console.log("drag start");
					},
					drag: function (event, ui) {
						ui.position.left = Math.min(150, ui.position.left);
					},
					stop: function (event, ui) {
						ngModel.$setViewValue("this is the more drag element");
					}
				});
			}
			else {
				element.draggable({
					addClasses: false
				});
				ngModel.$setViewValue("this is the basic drag element");
			}
		}
	}
})
//元素大小可调整
.directive("resizeElement", function () {
	return {
		link: function (scope, element, attr) {
			element.on('click', function () {
				console.log('123');
			})
			element.resizable({
			});
		}
	}
})
//元素可选择
.directive("selectElement", function () {
	return {
		link: function (scope, element, attr) {
			element.selectable({
				create: function (event, ui) {
					console.log("selectable create");
				}
			});
		}
	}
})
//元素可排序
.directive("sortElement", function () {
	return{
		require: 'ngModel',
		link: function (scope, element, attr, ngModel) {
			element.sortable({
				//排序停止后触发该事件，这时使用toArray可以将排好序的id序列化为一个数组
				deactivate: function (event, ui) {
					//将排好序的元素的id序列化为一个数组
					var sortedIDs = element.sortable( "toArray" );
					//定义空数组用来存储对应id的对象
					var sortedArray = [];
					//通过序列化的id来匹配对应的对象，并存储到sortedArray中
					for (var i = 0; i < sortedIDs.length; i ++) {
						angular.forEach(ngModel.$viewValue, function (value, key) {
							if (sortedIDs[i] == value.id) {
								sortedArray.push(value);
							}
						});
					}
					//将排好序的内容赋给ngModel
					ngModel.$setViewValue(sortedArray);
					console.log(ngModel);
				}
			});
		}
	}
})

//页面组件部分

//手风琴折叠
.directive("accordionElement", function () {
	return {
		link: function (scope, element, attr) {
			element.accordion();
		}
	}
})
//自动完成
.directive("autocompleteElement", function () {
	return {
		require: 'ngModel',
		link: function (scope, element, attr, ngModel) {
			element.autocomplete({
				autoFocus: true,
				source: ["apple", "huawei","vivo", "HTC", "xiaomi", "oppo", "SAMSUNG"],
				close: function (event, ui) {
					console.log(event.target.value);
					ngModel.$setViewValue(event.target.value);
				}
			})
		}
	}
})
.directive("datepicker", function () {
	return {
		require: 'ngModel',
		link: function (socpe, element, attr, ngModel) {
			element.datepicker({
				dateFormat: "yy-mm-dd",
				//星期设置为中文显示
				dayNamesMin: ["日", "一", "二","三","四","五", "六"],
				//月份设置为中文显示
				monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
			});
		}
	}
})