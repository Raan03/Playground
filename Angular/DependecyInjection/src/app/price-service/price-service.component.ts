import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-service',
  templateUrl: './price-service.component.html',
  styleUrls: ['./price-service.component.css']
})
export class PriceService implements IPriceService
{
  constructor() { }

  // imagine real application -> real database call
  calculateTotalPrice(basePrice: number, state: string) : number
  {
    const tax = Math.random();

    return basePrice + tax;
  }

}
export interface IPriceService
{
  calculateTotalPrice(basePrice: number, state: string) : number;
}
