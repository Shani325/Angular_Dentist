import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Address } from '../Adress.model';
import { Person } from '../Person.model';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(private personsService: PersonsService) {
    this.personsService.getPersons().then((value)=>{
      this.persons=value;
    }).catch((reason)=>{
      console.log(reason);
    })
   }
  
  ngOnInit(): void {
  }  
  
  address :Address={person:"",id:"",city:"",street:"",numOfHouse:-1};

  private _addressInput:Address|undefined;

  @Input()
  public set addressInput(a : Address | undefined){
    this._addressInput=a;
    this.addOrUpdateForm.controls.idControl.setValue(this._addressInput?.id);
    this.addOrUpdateForm.controls.cityControl.setValue(this._addressInput?.city);
    this.addOrUpdateForm.controls.streetControl.setValue(this._addressInput?.street);
    this.addOrUpdateForm.controls.numControl.setValue(this._addressInput?.numOfHouse);
    this.addOrUpdateForm.controls.personControl.setValue(this._addressInput?.person);
  }
  public get addressInput():Address | undefined{
    return this._addressInput;
  }
  
  // @Input()
  persons : Person[]=[] ; 
  
  @Output()
  onAddOrUpdate:EventEmitter<Address>=new EventEmitter<Address>();

  addOrUpdateForm:FormGroup=new FormGroup({
    "idControl":new FormControl("",[Validators.minLength(1),Validators.required]),
    "cityControl":new FormControl("",[Validators.minLength(1),Validators.required]),
    "streetControl":new FormControl("",[Validators.minLength(1),Validators.required]),
    "numControl":new FormControl("",[Validators.minLength(1),Validators.required]),
    "personControl":new FormControl("",[Validators.minLength(1),Validators.required])
  })

  addOrUpdate(){
    var a :Address ={person:"",id:"",city:"",street:"",numOfHouse:-1};
    a.id=this.addOrUpdateForm.value.idControl;
    a.city=this.addOrUpdateForm.value.cityControl;
    a.street=this.addOrUpdateForm.value.streetControl;
    a.numOfHouse=this.addOrUpdateForm.value.numControl;
    a.person=this.addOrUpdateForm.value.personControl;

    this.onAddOrUpdate.emit(a);
  } 
  
  // setPersons(p:Person[]){
  //   this.persons=p;
  // }
}
