import { Component, Input, OnInit } from '@angular/core';
import { Guess } from '../Guessess.model';

@Component({
  selector: 'show-guessess',
  templateUrl: './show-guessess.component.html',
  styleUrls: ['./show-guessess.component.css']
})
export class ShowGuessessComponent implements OnInit {

  constructor(  ) {
  }

  ngOnInit(): void {
  }
  @Input()
  allGuessess: Guess[] = [];
  func(){
    console.log(this.allGuessess)
  }
}
