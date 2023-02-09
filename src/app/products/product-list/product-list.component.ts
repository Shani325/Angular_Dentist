import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  selectedProduct: Product | undefined;

  products: Product[] = [{ id: "1234", name: "milk", amount: 100, price: 5 },
  { id: "5678", name: "bread", amount: 100, price: 7 },
  { id: "2345", name: "cheese", amount: 20, price: 10 },
  { id: "8907", name: "candy", amount: 1000, price: 1 },]

  showDetailsInInputs(product: Product): void {
    this.selectedProduct = product;
  }

  addOrUpdate(product: Product): void {
    var index = this.products.findIndex((p, i) => p.id == product.id);
    if (index != -1)
      this.products[index] = product;
    else
      this.products.push(product);
  }

  ngOnInit(): void {
  }

}
