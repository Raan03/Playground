import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'builder-form',
  templateUrl: './builder-form.component.html',
  styleUrls: ['./builder-form.component.css']
})
export class BuilderFormComponent implements OnInit {
	myForm: FormGroup;
  
  constructor(fb: FormBuilder) 
  {
	  this.myForm = fb.group({
		  'sku': ['ABC123']
	  });
  }

  ngOnInit() {
  }

	onSubmit(value: string) : void 
	{
		console.log('you submitted value: ', value);
	}
}
