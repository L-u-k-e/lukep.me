DATA = (function () {
	
	var all_sections = [
		{title: 'top',      id: 'banner'},
		{title: 'about me', id: 'profile'},
		{title: 'resume',   id: 'resume'},
		{title: 'services', id: 'services'},
		{title: 'contact',  id: 'contact'},
	];



	var info = {
		address: {
			street: '120 Northwood Circle',
			city: 'Rome',
			state: 'New York',
			state_short: 'NY',
			zip: '13440',
			fullstring: '120 Northwood Circle, Rome NY, 13440'
		},
		phone: '315-886-5733',
		email: 'luke@lukep.me',
	 	age: '21',
	 	medias: [
			{ icon: 'github-alt', href: 'https://github.com/L-u-k-e/' },
			{ icon: 'stack-exchange', href: 'http://stackoverflow.com/users/3581485/lukep'},
		]
	};



	var lifeSkills = [
		{label: 'Physical strength', value: 60},
    {label: 'Mental strength', value: 70},
    {label: 'Average degree of presence', value: 50},
    {label: 'Determination', value: 80},
    {label: 'Creativity', value: 60},
	];



  var careerSkills = [
		{
			header: 'Programming Languages',
			skills: [
				['JavaScript', 4.5],
				['Ruby',         4],
				['HTML',         4],
				['CSS/SCSS',   3.5],
				['Python',     3.5],
				['C/C++',        3],
				['Java',         3],
				['Scheme',       1]
			]
		},
		{
			header: 'Tools/ Frameworks',
			skills: [
				['Linux Command Line',  4],
				['Polymer',           3.5],
				['Meteor',              3],
				['jQuery',              3],
				['Git/Git Hub',         3],
			]
		},
		{
			header: 'Design Patterns/ Paradigms',
			skills: [
				['Object Oriented Programming',  4],
				['Functional Programming',       3],
				['Model View Controller',        3],
				['Concatenative Inheritance',    3]
			]
		},
		{
			header: 'Soft Skills',
			skills: [
				['Technical writing',    4],
				['Flexibility',          4],
				['Problem Solving',      4],
				['Communication',        4],
				['Creativity',           4]
			]
		}
	];


	var projects = [
		{
			title: 'Terrain Generator', 
		  language: 'C++/GLSL', 
		  desc: 'Noise based terrain generation in C++ using OpenGL.',
		  link: 'https://github.com/L-u-k-e/Terrain-Generator' 
		},

		{
		  title: 'Format',
		  language: 'Javascript',
		  desc: 'A Chrome extension that detects available markdown formatting tags and places the corresponding shortcuts in your context menu. ',
		  link: 'https://github.com/L-u-k-e/Format'
		},

		{
			title: 'Objectify.js',
			language: 'Javascript',
			desc: 'A leightweight library that implements constrained heredity on DOM elements, in an effort to make your event listeners more DRY and your life more happy.',
			link: 'https://github.com/L-u-k-e/Objectify'
		},

		{
			title: 'Eve.js',
			language: 'Javascript',
			desc: 'A super-charged element instantiation function.',
			link:'https://github.com/L-u-k-e/Eve'
		},
		{
			title: 'Intercept.js',
			language: 'Javascript',
			desc: 'Fire callbacks when elements that match jQuery selectors are added to the DOM',
			link: 'https://github.com/L-u-k-e/Intercept'
		}
	];


	var api = Object.freeze({
		sections: {
			with_banner: all_sections,
			without_banner: all_sections.slice(1)
		},
		info: info,
		lifeSkills: lifeSkills,
		careerSkills: careerSkills,
		projects: projects,
		data: api //'data_consumer' gets you the whole API
	});

	//publish subscriptions 
	//(one-way binding and does not work with elements inserted later)
	document.addEventListener('WebComponentsReady',function () {
		for (var item in api) {
			$('.' + item + '_consumer').each(function (i, element) { 
				element[item] = api[item];
			});
		}
	});

	return api;
}());