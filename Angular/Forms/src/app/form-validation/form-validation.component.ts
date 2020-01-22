import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { skuValidator } from '../validators/skuvalidator';

@Component({
  selector: 'form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  
  constructor(fb: FormBuilder) 
  {
	  this.myForm = fb.group({
		  'sku': ['ABC123', Validators.compose([Validators.required, skuValidator])]
	  });
	  
	  this.sku = this.myForm.controls['sku'];
	  
	  this.sku.valueChanges.subscribe(
		(value: string) => { console.log('sku changed to:', value); }
	  );
	  
	  this.myForm.valueChanges.subscribe(
		(value: string) => { console.log('form changed to:', value); }
	  );
  }

  ngOnInit() {
  }

	onSubmit(value: string) : void 
	{
		console.log('you submitted value: ', value);
	}
}
