import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import productsData from '../../products.json';
import { CommonModule } from '@angular/common';
import { RatingPipePipe } from '../pipes/rating-pipe-pipe';
import { CartService } from '../../services/cart.service'; 

interface products {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  stock?: number;
}
@Component({
  selector: 'app-product-list',
  imports: [RouterLink, CommonModule, RatingPipePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
 //  Correct typing + cast JSON
  
  products: products[] = productsData as products[];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  // Add product to cart
  addToCart(product: products) {
    if (product.stock && product.stock > 0) {
      this.cartService.addToCart(product);
      alert(`✅ ${product.title} added to cart 🛒`);
    } else {
      alert('❌ Cannot add. Product is out of stock!');
    }
  }

  // Navigate to product details page
  viewDetails(product: products) {
    this.router.navigate(['/products', product.id]);
  }
}