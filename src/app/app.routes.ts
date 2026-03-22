import { Routes } from '@angular/router';
import { ProductApp } from './components/product-app/product-app';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Cart } from './components/cart/cart';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'Product_app', pathMatch: 'full' }, // default route goes to home
    { path: 'Product_app', component: ProductApp, title: 'Products APP' },
    { path: 'login', component: Login, title: 'Login' },
    { path: 'register', component: Register, title: 'Register' },
    { path: 'cart', component: Cart, title: 'Cart' },
    { path: 'product-list', component: ProductList, title: 'products' },
   { path: 'products/:productId', component: ProductDetails ,title: 'Product Details'},
  { path: 'cart', component: Cart,title: 'Cart' },
    { path: 'not-found', component: NotFound, title: '404 - Page Not Found'  } // catch-all for wrong paths//
   , { path: '**', redirectTo: 'not-found' }
];

