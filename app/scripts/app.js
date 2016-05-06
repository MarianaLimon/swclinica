(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'ui.bootstrap'                 // Bootstrap
    ])
})();

var app = angular.module('formApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.formData = {};

    $scope.submitForm = function (formData) {
        alert('Form submitted with' + JSON.stringify(formData));
    };
});

function solonumeros (e){
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}