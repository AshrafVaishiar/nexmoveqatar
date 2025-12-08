import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  salesOpen = false;
  openSales() { this.salesOpen = true; }
  closeSales() { this.salesOpen = false; }
  
}
