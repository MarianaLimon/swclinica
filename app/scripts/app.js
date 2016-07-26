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

//ocultar y mostrar campos radioboton
/*<form action="" method="post" name="fcontacto">
        //inputs

    <p>A través de donde nos has conocido:<br />
    //importante llamar a la función
<input type="radio" name="Conocido" value="Google" id="Conocido_0" onclick="mostrarReferencia();" /> Google
    <input type="radio" name="Conocido" value="Otros" id="Conocido_1" onclick="mostrarReferencia();" /> Otros
    </p>

        //div oculto
    <div id="desdeotro" style="display:none;">
    <p>Referencia de la oferta:</p>
<p><input type="text" name="otro" class="input" /></p>
    </div>
    </form>*/


        function mostrarReferencia(){
//Si la opcion con id Conocido_1 (dentro del documento > formulario con name fcontacto >     y a la vez dentro del array de Conocido) esta activada
            if (document.fcontacto.Conocido[1].checked == true) {
//muestra (cambiando la propiedad display del estilo) el div con id 'desdeotro'
                document.getElementById('desdeotro').style.display='block';
//por el contrario, si no esta seleccionada
            } else {
//oculta el div con id 'desdeotro'
                document.getElementById('desdeotro').style.display='none';
            }
        }


//ocultar y mostrar campos select

function opcionOnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion1");
        divC.style.display = "";

        divT = document.getElementById("opcion2");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion1");
        divC.style.display="none";

        divT = document.getElementById("opcion2");
        divT.style.display = "";
    }
}
function opcion2OnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion3");
        divC.style.display = "";

        divT = document.getElementById("opcion4");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion3");
        divC.style.display="none";

        divT = document.getElementById("opcion4");
        divT.style.display = "";
    }
}

function opcion3OnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion5");
        divC.style.display = "";

        divT = document.getElementById("opcion6");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion5");
        divC.style.display="none";

        divT = document.getElementById("opcion6");
        divT.style.display = "";
    }
}

function opcion4OnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion7");
        divC.style.display = "";

        divT = document.getElementById("opcion8");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion7");
        divC.style.display="none";

        divT = document.getElementById("opcion8");
        divT.style.display = "";
    }
}

function opcion5OnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion9");
        divC.style.display = "";

        divT = document.getElementById("opcion10");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion9");
        divC.style.display="none";

        divT = document.getElementById("opcion10");
        divT.style.display = "";
    }
}

function opcion6OnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion11");
        divC.style.display = "";

        divT = document.getElementById("opcion12");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion11");
        divC.style.display="none";

        divT = document.getElementById("opcion12");
        divT.style.display = "";
    }
}

function opcion7OnChange(sel) {
    if (sel.value=="si"){
        divC = document.getElementById("opcion13");
        divC.style.display = "";

        divT = document.getElementById("opcion14");
        divT.style.display = "none";

    }else{

        divC = document.getElementById("opcion13");
        divC.style.display="none";

        divT = document.getElementById("opcion14");
        divT.style.display = "";
    }
}

function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);

    if(elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
    }
    else {
        elemento.style.display = "block";
    }
}

angular.module('ui.bootstrap.demo').controller('CollapseDemoCtrl', function ($scope) {
    $scope.isCollapsed = false;
});


angular.module('TabsApp', [])
    .controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = [{
            title: 'One',
            url: 'one.tpl.html'
        }, {
            title: 'Two',
            url: 'two.tpl.html'
        }, {
            title: 'Three',
            url: 'three.tpl.html'
        }];

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        };

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        }
    }]);

angular.module('myApp', ['mwl.calendar', 'ui.bootstrap']);

angular.module('myApp', [require('angular-bootstrap-calendar'), require('angular-ui-bootstrap')]);
