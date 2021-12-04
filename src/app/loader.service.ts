import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private ngxLoader: NgxUiLoaderServic) {}
  isLoading = new Subject<boolean>();

  show() {
    this.ngxLoader.start();
  }
  hide() {
    this.ngxLoader.stop();
  }
}
