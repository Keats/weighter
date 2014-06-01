/// <reference path="../../types/types.ts"/>

var module = angular.module("home.service", []);

class WeightService implements home.IWeightService {

  localStorageKey = "data";
  points = [];

  _loadFromLocalStorage(): home.IPoint[] {
    if (localStorage[this.localStorageKey] !== undefined) {
      this.points = JSON.parse(localStorage[this.localStorageKey]);
    }

    return this.points;
  }

  _saveInLocalStorage() {
    localStorage[this.localStorageKey] = JSON.stringify(this.points);
  }

  _getTodayTimestamp(): number {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  }

  getData(): home.IPoint[] {
    return this._loadFromLocalStorage();
  }

  addPoint(weight) {
    var date: number = this._getTodayTimestamp();

    this.points = _.filter(this.points, (point: home.IPoint) => {
      return point.date !== date;
    });

    this.points.push({
      weight: weight,
      date: date
    });

    this._saveInLocalStorage();
    return this.points;
  }

}

module.service("weightService", WeightService);
