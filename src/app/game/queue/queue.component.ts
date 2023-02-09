import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  constructor(private colorsService: ColorsService) {
    this.colorsService.getAllColors().then((value) => {
      this.chooseColors = value;
    }).catch((reason) => {
      console.log(reason);
    }) 
  }

  ngOnInit(): void {
  }
  chooseColors: string[] = [];

  currentColors: string[] = ["", "", "", ""];
  selected:string|undefined;

  @Output()
  outCurColors:EventEmitter<string[]>=new EventEmitter<string[]>();

  outChoices() {
    this.outCurColors.emit(this.currentColors);
  }
  
  setCur(c0:string,c1:string,c2:string,c3:string){
    this.currentColors[0]=c0;
    this.currentColors[1]=c1;
    this.currentColors[2]=c2;
    this.currentColors[3]=c3;
    this.outChoices();
  }
}
