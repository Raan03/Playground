export interface Metric {
  eventName: string;
  scope: string;
}
export interface Analytics {
  recordEvent(metric: Metric): void;
}
