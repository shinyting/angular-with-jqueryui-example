ajudemo.directive("dragElement", function () {
	return {
		scope: {},
		link: function (scope, element, attrs) {
			element.draggable({
				addClasses: false
			})
		}
	}
})