import { FormControl } from '@angular/forms';

export function skuValidator(control: FormControl): { [s: string] : boolean}
	{
		if (!control.value.match(/^123/))
		{
			return {
				invalidSku: true
			};
		}
	}