import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent
    ],
    exports: [
        ProductListComponent
    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: []
})
export class ProductsModule { }