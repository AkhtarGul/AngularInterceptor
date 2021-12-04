import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from '../Http-Interceptor/auth-header-interceptor';
import { LoaderInterceptor } from '../Http-Interceptor/loader.interceptor';

export const httpInterceptProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
];
