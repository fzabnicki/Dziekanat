import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinner: SpinnerService) {}

    intercept(
  request: HttpRequest<unknown>,
  next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
      this.spinner.show();
      return next.handle(request).pipe(
        finalize(() => {
          this.spinner.hide();
        })
      );
    }
}