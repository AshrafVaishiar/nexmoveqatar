import { Routes } from '@angular/router';
import { GetQuote } from '../get-quote/get-quote.component';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quote', component: GetQuote },
];
