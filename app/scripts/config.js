function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html"
        })

        .state('landing', {
            url: "/login",
            templateUrl: "../views/GestorClinico.html",
            data: { pageTitle: 'Login', specialClass: 'landing-page' }
        })

        .state('index.inicio', {
            url: "/inicio",
            templateUrl: "../views/Inicio.html",
            data: { pageTitle: 'Inicio', specialClass: 'landing-page'}
        })

        .state('index.nuevo', {
            url: "/interdoc",
            templateUrl: "../views/NuevoPaciente.html",
            data: { pageTitle: 'Nuevo paciente', specialClass: 'landing-page'}
        })

        .state('index.search', {
            url: "/buscarpaciente",
            templateUrl: "../views/BuscarPaciente.html",
            data: { pageTitle: 'Buscar paciente', specialClass: 'landing-page'}
        })

        .state('index.registrarpagos', {
            url: "/registrarpagos",
            templateUrl: "../views/RegistrarPagos.html",
            data: { pageTitle: 'Registrar Pagos', specialClass: 'landing-page'}
        })

        .state('index.historialclinico', {
            url: "/historialclinico",
            templateUrl: "../views/HistorialClinico.html",
            data: { pageTitle: 'Historial Clinico', specialClass: 'landing-page'}
        })

        .state('index.historialpagos', {
            url: "/historialpagos",
            templateUrl: "../views/HistorialPagos.html",
            data: { pageTitle: 'Historial de Pagos', specialClass: 'landing-page'}
        })

        .state('index.agenda', {
            url: "/agenda",
            templateUrl: "../views/Agenda.html",
            data: { pageTitle: 'Agenda de Citas', specialClass: 'landing-page'}
        })

        .state('index.tratamiento', {
            url: "/tratamiento",
            templateUrl: "../views/tratamiento.html",
            data: { pageTitle: 'Tratamientos', specialClass: 'landing-page'}
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });