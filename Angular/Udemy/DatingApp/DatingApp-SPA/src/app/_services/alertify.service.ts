import { Injectable } from "@angular/core";
import * as alertify from "alertifyjs";

@Injectable({
  providedIn: "root"
})
export class AlertifyService {
  constructor() {}
  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      }
    });
  }
  succes(message: string) {
    alertify.succes(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  message(message: string) {
    alertify.message(message);
  }
}
