function MainCtrl() {

    this.userName = 'Doctor Ricardo';
    this.helloText = 'Bienvenido a una creacion de MarianaLimon';
    this.descriptionText = 'Este es mi proyecto de residencias profecionales.' +
        'y se llama GS Gestor Clinico, se desarrollo para optimizar y digitalizar procesos de una clinica dental.';

}


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl);