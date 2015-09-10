UTILS = {
	scrollToID: function(ID, speed) {
		speed = speed || 1000;
		$('html,body').animate({
			scrollTop: $(document.getElementById(ID)).offset().top
		}, speed);
	},

	toArray: function(collection) {
		return Array.prototype.slice.call(collection);
	},

	clamp: function(num, min, max) {
 		return num < min ? min : (num > max ? max : num);
	},

	isTouchEnabled: (function () {
		var test = ('ontouchstart' in document.documentElement);
		
		return (function () { return test; });
	}())
};