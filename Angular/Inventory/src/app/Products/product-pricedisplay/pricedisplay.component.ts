import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './pricedisplay.component.html',
  styleUrls: ['./pricedisplay.component.css']
})
export class ProductPriceDisplayComponent {
	@Input() price: number;
}
