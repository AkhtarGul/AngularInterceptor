import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loadSrv: LoaderService) {}

  intercept(reqest: HttpRequest<any>, next: HttpHandler) {
    this.loadSrv.show();
    console.log('Loader Interceptor');
    return next.handle(reqest).pipe(finalize(() => this.loadSrv.hide()));
  }
}
