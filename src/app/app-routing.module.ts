import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAddressPersonsComponent } from './addressPerson/show-address-persons/show-address-persons.component';
import { BoolGameComponent } from './game/bool-game/bool-game.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path:'Addresses&Persons',
    component:ShowAddressPersonsComponent
  },
  {
    path:'Game',
    component:BoolGameComponent
  },
  {
    path:'Products',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
