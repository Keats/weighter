/// <reference path="../../types/types.ts"/>

var modules = [
  "home.service"
];

var home = angular.module("home.index", modules);

class HomeController implements home.IHomeController {
  static $inject = [
    "$scope",
    "$rootScope",
    "weightService"
  ];

  options = {
    axes: {
      x: {
        key: 'date',
        labelFunction: function(date) {return "";},
        tooltipFormatter: function(date) {return moment(new Date(date)).fromNow();},
        type: 'date'
      },
      y: {
        type: 'linear'
      }
    },
    series: [
      {
        y: 'weight',
        color: 'steelblue',
        thickness: '2px',
        type: 'line',
        label: 'Your weight'
      },
    ],
    lineMode: 'linear',
    tension: 0.7,
    tooltipMode: "default"
  };

  constructor(
    private $scope: core.IScope,
    private $rootScope: core.IRootScope,
    private weightService: home.IWeightService
  ) {
    $scope.vm = this;
    $rootScope.pageTitle = "Home";

    $scope.vm.points = weightService.getData();
  }

  addPoint(weight: number) {
    this.$scope.vm.points = this.weightService.addPoint(weight);
  }
}

home.controller("HomeController", HomeController);
