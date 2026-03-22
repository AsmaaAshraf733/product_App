import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import productsData from '../../products.json';
import { CurrencyPipe } from '@angular/common';
import { RatingPipePipe } from '../pipes/rating-pipe-pipe';
import { CartService } from '../../services/cart.service';
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  stock?: number;
}

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe,RatingPipePipe,],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  currentProduct?: Product;
  addedToCart = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('productId'));
    this.currentProduct = productsData.find(p => p.id === id);
  }

  addToCart(): void {
    if (!this.currentProduct || this.currentProduct.stock === 0) {
      alert('❌ Out of Stock!');
      return;
    }
    this.cartService.addToCart(this.currentProduct);
    this.addedToCart = true;
    alert(`✅ ${this.currentProduct.title} added to cart 🛒`);
  }

  viewMoreDetails(product: Product): void {
    console.log('Viewing more details:', product);
    // open modal or show extra info
  }

  /** Wrapper to call both */
  addAndView(product: Product): void {
    this.addToCart();
    this.viewMoreDetails(product);
  }
}