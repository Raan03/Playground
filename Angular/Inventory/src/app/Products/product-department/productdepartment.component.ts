import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './productdepartment.component.html',
  styleUrls: ['./productdepartment.component.css']
})
export class ProductDepartmentComponent{
	@Input() product: Product;
}
