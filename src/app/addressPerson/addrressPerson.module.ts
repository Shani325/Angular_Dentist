import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddressListComponent } from "./address-list/address-list.component";
import { AddressComponent } from "./address/address.component";
import { PersonFormComponent } from "./person-form/person-form.component";
import { ShowAddressPersonsComponent } from "./show-address-persons/show-address-persons.component";


@NgModule({
  declarations: [    
    AddressComponent,
    AddressListComponent,
    PersonFormComponent ,
    ShowAddressPersonsComponent     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ShowAddressPersonsComponent
  ],
  providers: []
})
export class AddressPersonModule { }