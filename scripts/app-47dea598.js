(function(){angular.module("randsumFrontend",["ngAnimate","ngTouch","ngResource","ui.router","ngMaterial"]).config(["$stateProvider","$urlRouterProvider",function(t,n){return t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController"}),n.otherwise("/")}])}).call(this),function(){angular.module("randsumFrontend").controller("NavbarCtrl",["$scope",function(t){return t.date=new Date}])}.call(this),function(){angular.module("randsumFrontend").controller("MainController",["$scope",function(){}])}.call(this),angular.module("randsumFrontend").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content></md-content><footer></footer></div>'),t.put("components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>')}]);