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
            templateUrl: "../views/NuevoPaciente.html",
            data: { pageTitle: 'Nuevo paciente', specialClass: 'landing-page'}


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