/// <reference path="../libs/angular.d.ts"/>

declare module home {
  interface IPoint {
    date: number;
    weight: number;
  }

  interface IHomeController {
    addPoint(number);
  }

  interface IWeightService {
    localStorageKey: string;
    points: IPoint[];

    getData(): IPoint[];
    addPoint(number): any;
  }
}
