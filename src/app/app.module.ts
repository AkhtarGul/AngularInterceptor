import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptProviders } from './Http-Interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule, // import NgxUiLoaderModule
    // NgxUiLoaderRouterModule,
  ],
  declarations: [AppComponent, HelloComponent],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
