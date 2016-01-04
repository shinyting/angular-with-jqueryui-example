ajudemo.directive("dragElement", function () {
	return {
		scope: {},
		link: function (scope, element, attrs) {
			console.log(attrs);
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
					ui.position.left = Math.min(100, ui.position.left);
				}
			})
		}
	}
})