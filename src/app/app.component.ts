import { Component, VERSION } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private todoSrv: TodoService,
    private loader: LoaderService,
    private ngxLoader: NgxUiLoaderServic
  ) {}
  isLoading: Subject<boolean> = this.loader.isLoading;
  getTodo() {
    this.todoSrv.getAll().subscribe((res) => {
      console.log(res);
    });
  }
}
