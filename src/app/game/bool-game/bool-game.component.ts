import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorsService } from '../colors.service';
import { Guess } from '../Guessess.model';

@Component({
  selector: 'bool-game',
  templateUrl: './bool-game.component.html',
  styleUrls: ['./bool-game.component.css']
})
export class BoolGameComponent implements OnInit {

  constructor(private colorsService: ColorsService) {
    this.colorsService.getColorsRand().then((value) => {
      this.chooseColors = value;
    }).catch((reason) => {
      console.log(reason);
    })

  }

  ngOnInit(): void {
  }

  guessess: Guess[] = []//מערך כל הניחושים
  chooseColors: string[] = [];//מערך הצבעים שהוגרלו  
  curChoice: Guess = { colors: [], countB: 0, countP: 0 };
  countBool: number | undefined;
  countPgiah: number | undefined;
  flag: boolean = false;

  checkChoose(guess: string[]) {
    this.countBool = 0;
    this.countPgiah = 0;
    for (let index = 0; index < guess.length; index++) {
      if (guess.filter((x) => { return x == guess[index] }).length > 1)
        guess[index] = "Same values!";
    }
    for (let index = 0; index < guess.length; index++) {
      if (guess[index] == this.chooseColors[index])
        this.countBool++;
      else if (this.chooseColors.indexOf(guess[index]) >= 0)
        this.countPgiah++;
    }
    if (this.countBool == 4)
      this.flag = true;
    this.curChoice = { colors: [], countB: this.countBool, countP: this.countPgiah };
    Array.prototype.push.apply(this.curChoice.colors, guess);
    this.guessess.push(this.curChoice);
  }
  func(){
    console.log("trying")
  }
}
