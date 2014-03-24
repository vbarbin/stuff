define(['jquery', 'domReady!', 'angular', 'angular-ui', 'angular-bootstrap', 'angular-ui-router', 'services/all', 'controllers/all', 'directives/all'],
    function($, document, angular) {
        var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ui.directives', 'app.services', 'app.controllers', 'app.directives']);

        app.config(function($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect to /home
            $urlRouterProvider.otherwise("/home");

            // Now set up the states
            $stateProvider.state('home', {
                url: "/home",
                templateUrl: "partials/mainView.html"
            });

            $stateProvider.state('validation', {
                url: "/validation",
                templateUrl: "partials/validationView.html"
            });

            $stateProvider.state('socketio', {
                url: "/socketio",
                templateUrl: "partials/socketIOView.html"
            });
        });

        angular.bootstrap(document, ['app']);

        return app;
    });