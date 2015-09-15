(function () {
	var app = document.querySelector('#app');
	app.selected = 0;

	//Define Routes
	page('/', home);
	page('/hire-me', hireMe);
	page('/web-development', webDev);

	//Configure
	page({ hashbang: true });

	function home() {
		app.selected = 0;
	}

	function hireMe() {
		app.selected = 1;
	}

	function webDev() {
		app.selected = 2;
	}

}());