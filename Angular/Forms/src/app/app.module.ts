import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { BuilderFormComponent } from './builder-form/builder-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    BuilderFormComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
