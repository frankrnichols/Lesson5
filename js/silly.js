var SILLY = (function(module) {
	module.DoIt = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
		},
	module.DoThat = function(resultObject) {
		resultObject.prepend('Lesson FIVE' + '<br/>');
		};
		return module;
}(SILLY || {}));
