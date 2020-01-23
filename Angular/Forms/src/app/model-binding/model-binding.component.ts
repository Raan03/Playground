import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'model-binding',
  templateUrl: './model-binding.component.html',
  styleUrls: ['./model-binding.component.css']
})
export class ModelBindingComponent {
  productName: string;

  constructor()
  {
    this.productName = "RA01: MODELBINDING"
  }

  onSubmit(value: string): void
  {
    console.log('you submitted value: ', value);
  }

}
