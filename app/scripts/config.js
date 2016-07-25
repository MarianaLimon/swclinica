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
            url: "/nuevopaciente",
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

        .state('index.crearhistorialclinico', {
            url: "/crearhistorialclinico",
            templateUrl: "../views/CrearHistorialClinico.html",
            data: { pageTitle: 'Historial Clinico', specialClass: 'landing-page'}
        })

        .state('index.consultarhistorialclinico', {
            url: "/consultarhistorialclinico",
            templateUrl: "../views/ConsultarHistorialClinico.html",
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

        .state('index.historialPago', {
            url: "/historialPago",
            templateUrl: "../views/historialPago.html",
            data: { pageTitle: 'historialPago', specialClass: 'landing-page'}
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });