import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { GetQuote } from "../get-quote/get-quote.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('myapp');

  salesOpen = false;

  openSales() {
    this.salesOpen = true;
  }

  closeSales() {
    this.salesOpen = false;
  }

  isQuotePage = false;

  constructor(public router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.isQuotePage = event.url === '/quote';
      }
    });
  }

  navigateToGetQuote() {
        this.router.navigate(['/quote']);
  }
}
