import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceService } from './price-service/price-service.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    PriceService,
    UserDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
