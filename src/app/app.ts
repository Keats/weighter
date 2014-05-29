/// <reference path="../types/types.ts"/>

var modules = [
  "templates",

  "weighter.home",

  "ui.router.state"
];

var appModule = angular.module("weighter", modules);

var appConfig = function ($urlRouterProvider: ng.ui.IUrlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
};

appConfig.$inject = ["$urlRouterProvider"];
appModule.config(appConfig);
