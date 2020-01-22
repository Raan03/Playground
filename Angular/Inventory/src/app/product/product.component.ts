import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {  
	products: Product;
  constructor() { 
	this.product =	new Product(
		'AB01 (SKU)', 'YOLANDA (NAME)', 'Google.com (URL)', [ 'D (DEP1)', 'D (DEP2)'], 13.37
	);
  }

  ngOnInit() {
  }

}
