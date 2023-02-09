import { Component, OnInit } from '@angular/core';
import { Address } from '../Adress.model';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedAddress :Address | undefined;

  addresses : Address []=[
    {id:"1",city:"Jerusalem",street:"Hapisga",numOfHouse:54,person:""},
    {id:"2",city:"Bnei-Brack",street:"Kaaneman",numOfHouse:145,person:""}
  ]
  
  showInputs(a:Address){
    this.selectedAddress=a;
  }

  addAddress(address : Address):void{
    this.addresses.push(address);
  }

  addOrUpdate(a:Address):void{
    var index=this.addresses.findIndex(index=>index.id==a.id)
    if(index!=-1){
      this.addresses[index]=a;
      
    }
    else
      this.addAddress(a);
  }
}
