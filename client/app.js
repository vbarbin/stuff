define(['jquery', 'domReady!', 'angular', 'angular-ui', 'angular-bootstrap', 'angular-ui-router', 'controllers/all', 'directives/all'],
    function($, document, angular) {
        var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.controllers', 'app.directives']);

        app.config(function($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect to /home
            $urlRouterProvider.otherwise("/home");

            // Now set up the states
            $stateProvider.state('home', {
                url: "/home",
                templateUrl: "partials/mainView.html"
            });

            $stateProvider.state('accordions', {
                url: "/accordions",
                templateUrl: "partials/accordionView.html"
            });

            $stateProvider.state('carousel', {
                url: "/carousel",
                templateUrl: "partials/carouselView.html"
            });
        });

        angular.bootstrap(document, ['app']);

        return app;
    });