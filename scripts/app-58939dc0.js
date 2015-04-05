(function(){angular.module("randsum.roller",["ngResource"]),angular.module("randsumFrontend",["ngAnimate","ngTouch","ui.router","ngMaterial","randsum.roller"]).config(["$stateProvider","$urlRouterProvider",function(t,l){return t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController"}),l.otherwise("/")}])}).call(this),function(){var t;t=function(){function t(t){this.$resource=t,l=this.$resource("http://api.randsum.io/v1/roll/:numberOfRolls/d/:diceSides")}var l;return l=null,t.$inject=["$resource"],t.prototype.roll=function(t,r){return l.get({numberOfRolls:t,diceSides:r})},t}(),angular.module("randsumFrontend").service("RollerService",t)}.call(this),function(){angular.module("randsumFrontend").controller("NavbarCtrl",["$scope",function(t){return t.date=new Date}])}.call(this),function(){angular.module("randsumFrontend").controller("MainController",["RollerService","$scope",function(t,l){return l.rollResult=0,l.roll={numberOfRolls:1,diceSides:20},l.rollAgain=function(){return l.rollResult=t.roll(l.roll.numberOfRolls,l.roll.diceSides)},l.rollAgain()}])}.call(this),angular.module("randsumFrontend").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="vertical" layout-fill=""><md-content><input ng-model="roll.numberOfRolls"> <input ng-model="roll.diceSides"><p class="roll-result">{{rollResult.total}}</p><button ng-click="rollAgain()">Roll</button></md-content><footer></footer></div>'),t.put("components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>')}]);