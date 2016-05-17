function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/inicio");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })

        .state('index.main', {
            url: "/interdoc",
            templateUrl: "../views/NuevoPaciente.html"

        })
        .state('index.interdoc', {
            url: "/interdoc",
            templateUrl: "views/interdoc.html",
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