import { Component } from '@angular/core';
import { Product } from './products/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  
  constructor()
  {
	this.products =	[
		new Product('AB01 (SKU)', 'YOLANDA1 (NAME)', 'Google1.com (URL)', [ 'D1 (DEP1)', 'D1 (DEP2)'], 13.35),
		new Product('AB02 (SKU)', 'YOLANDA2 (NAME)', 'Google2.com (URL)', [ 'D2 (DEP1)', 'D2 (DEP2)'], 13.36),
		new Product('AB03 (SKU)', 'YOLANDA3 (NAME)', 'Google3.com (URL)', [ 'D3 (DEP1)', 'D3 (DEP2)'], 13.37)
	];
  }
	
	productWasSelected(product: Product): void
	{
		console.log('Product was selected: ', product);
	}
}
