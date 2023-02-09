import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  colors: string[] = ["red", "yellow", "green", "blue", "orange", "pink"];
  currentColors: string[] = ["", "", "", ""];
  indexes: number[] = [10, 10, 10, 10];

  randColors(): string[] {

    for (let index = 0; index < this.currentColors.length; index++) {
      var i = Math.floor(Math.random() * this.colors.length);
      while (this.indexes.indexOf(i) > -1)
        i = Math.floor(Math.random() * this.colors.length);
      this.currentColors[index] = this.colors[i];
      this.indexes[index] =i;
    }

    return this.currentColors;
  }

  getColorsRand(): Promise<string[]> {
    this.currentColors = this.randColors();
    return new Promise(
      (res, rej) => {
        if (this.currentColors.length)
          res(this.currentColors);
        else
          rej("FAIL!")
      }
    )
  }
  getAllColors(): Promise<string[]> {
    return new Promise(
      (res, rej) => {
        if (this.colors.length)
          res(this.colors);
        else
          rej("FAIL!")
      }
    )
  }

}
