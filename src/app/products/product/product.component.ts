import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  @Input()
  prod:Product ={id:"",amount:0,price:0,name:""};

  @Output()
  onConfirm:EventEmitter<Product>=new EventEmitter<Product>();

  Confirm(i:string,n:string,p:string,a:string){
    var addProduct:Product={id:i,name:n,price:Number(p),amount:Number(a)};
    this.onConfirm.emit(addProduct);
  }
  
}
