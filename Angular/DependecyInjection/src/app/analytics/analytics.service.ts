import { Injectable } from '@angular/core';
import { Metric, Analytics } from './analytics.interface';

@Injectable()
export class AnalyticsService {
  constructor(private implementation: Analytics) {

  }
  record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}
