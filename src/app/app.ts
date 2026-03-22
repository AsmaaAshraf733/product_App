import { Component, signal } from '@angular/core';
import {  NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, Navbar,ProductList,RouterModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FinalProject');

  showLayout = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        // hide layout for /not-found page
        this.showLayout = !event.urlAfterRedirects.includes('not-found');
      });
  }
}
