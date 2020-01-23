import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Metric, Analytics } from './analytics.interface';
import { AnalyticsService } from './analytics.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: "API_URL", useValue: "http://api.raan03.be/http"
    },
    {
      provide: AnalyticsService,
      deps: [HttpClient, "API_URL"],
      useFactory(http: HttpClient, apiUrl: string) {
      const loggingImplementation: Analytics = {
        recordEvent: (metric: Metric): void => {
          console.log('sending to ', apiUrl);
          console.log('the metric is: ', metric);
        }
      };

      return new AnalyticsService(loggingImplementation);
    }
  }],
  declarations: []
})
export class AnalyticsModule {

}
