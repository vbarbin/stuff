require.config({
	baseUrl: '/',

	paths: {
		jquery: 'libs/jquery/jquery',
		angular: 'libs/angular/angular',
		'angular-ui': 'libs/angular-ui/build/angular-ui',
		'angular-bootstrap': 'libs/angular-bootstrap/ui-bootstrap-tpls',
		'angular-ui-router': 'libs/angular-ui-router/release/angular-ui-router',
		bacon: 'libs/bacon/dist/Bacon',
		domReady: 'libs/requirejs-domready/domReady',
	},

	shim: {
		angular: {
			deps: ['jquery'], 
			exports: 'angular'
		},
		'angular-ui': {
			deps: ['angular'],
			exports: 'angular-ui'
		},
		'angular-bootstrap': {
			deps: ['angular-ui'],
			exports: 'angular-bootstrap'
		},
		'angular-ui-router': {
			deps: ['angular'],
			exports: 'angular-ui-router'
		}
	}
});

require(['app'], function(app) {
	//app.run();
});