function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/inicio");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })
        .state('index.main', {
            url: "/main",
            templateUrl: "../views/AltaPaciente.html",
            data: { pageTitle: 'Example view' }
        })
        .state('landing', {
            url: "/inicio",
            templateUrl: "../views/GestorClinico.html",
            data: { pageTitle: 'Login', specialClass: 'landing-page' }

        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });