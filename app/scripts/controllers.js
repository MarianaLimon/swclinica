function MainCtrl() {

    this.userName = 'Doctor Ricardo';
    this.helloText = 'Bienvenido a una creacion de MarianaLimon';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app.' +
        ' You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

}


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl);