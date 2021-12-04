import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    //logic
    console.log('Auth Intercept Providers');
    console.log(req.url);
    const authToken =
      'BearerToken' +
      '   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5ZjRkMjg0YS05NDY5LTRjNjYtOGU0YS04NTk3MTVjZjExZmQiLCJ1bmlxdWVfbmFtZSI6ImZhemFsMUB5b3BtYWlsLmNvbSIsImVtYWlsIjoiZmF6YWwxQHlvcG1haWwuY29tIiwicm9sZSI6Ikxhd3llciIsImNlcnRzZXJpYWxudW1iZXIiOiI1OTNkMjFkYTVhNWY0YjEyYjFiOTdhMzcyZjFjYzFmNyIsIm5iZiI6MTYzNjM5NjUwOSwiZXhwIjoxNjM2NDgyOTA5LCJpYXQiOjE2MzYzOTY1MDksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzIyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzIyLyJ9.cdslW_ExQLBfY3l8UdLjgkt9DYUYjz7Azu2e5kD_Cac';
    const authReq = req.clone({
      setHeaders: { Authorization: authToken },
    });
    return next.handle(authReq);
  }
}
