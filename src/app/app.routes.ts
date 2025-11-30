import { Routes } from '@angular/router';
import { GetQuote } from '../get-quote/get-quote.component';
import { App } from './app';

export const routes: Routes = [
  { path: 'quote', component: GetQuote },
];
