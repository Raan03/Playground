import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductRowComponent {
	@Input() product: Product;
	@HostBinding('attr.class') cssClass = 'item';
}
