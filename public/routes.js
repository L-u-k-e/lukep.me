(function () {
	var app = document.querySelector('#app');
	app.selected = 0;
	app.setSelected = function(val) {
		document.body.scrollTop = 0;
		this.selected = val;
	};
	//Define Routes
	page('/', home);
	page('/hire-me', hireMe);
	page('/web-development', webDev);

	//Configure
	page({ hashbang: true });

	function home() {
		app.setSelected(0);
		var home = document.querySelector('home-page')
		home.refitGrid();
	}

	function hireMe() {
		app.setSelected(1);
	}

	function webDev() {
		app.setSelected(2);
	}

}());