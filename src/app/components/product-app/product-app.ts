import { Component } from '@angular/core';
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-product-app',
  imports: [ProductList],
  templateUrl: './product-app.html',
  styleUrl: './product-app.css'
})
export class ProductApp {

}
