import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceService } from './price-service/price-service.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserService } from './services/user.service';
import { AnalyticsModule } from './analytics/analytics.module';

@NgModule({
  declarations: [
    AppComponent,
    PriceService,
    UserDemoComponent
  ],
  imports: [
    BrowserModule,
    AnalyticsModule
  ],
  providers: [UserService, { provide: "API_URL", useValue: "http://api.raan03.be/V1"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
